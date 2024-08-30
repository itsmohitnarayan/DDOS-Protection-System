from logging import root
import subprocess
import time
import threading
import queue
from tkinter import Tk, Label, Entry, Button, Listbox, Text, END
from tkinter import ttk
from scapy.all import sniff, IP, TCP
from flask import Flask, request, make_response

# Configuration
ATTACK_THRESHOLD = 100  # Number of requests from a single IP to consider it malicious
CHALLENGE_TIMEOUT = 300  # 5 minutes to solve the challenge
BLOCK_DURATION = 3600    # 1 hour block
HONEYPOT_ENDPOINT = "/hidden-honeypot"  # Honeypot trap

# Track IPs
ip_packet_count = {}
ip_challenge_time = {}
whitelist = set()
monitored_ips = []

app = Flask(__name__)

# Event queue for communication between threads
event_queue = queue.Queue()

# Honeypot trap to catch bots
@app.route(HONEYPOT_ENDPOINT, methods=['GET', 'POST'])
def honeypot():
    ip = request.remote_addr
    block_ip(ip)
    return make_response("You've been caught!", 403)

# Simple challenge-response for rate limiting
@app.route('/challenge', methods=['GET'])
def challenge():
    ip = request.remote_addr
    if ip in whitelist:
        return "Welcome back!"
    
    if ip not in ip_challenge_time:
        ip_challenge_time[ip] = time.time()
    
    current_time = time.time()
    if current_time - ip_challenge_time[ip] > CHALLENGE_TIMEOUT:
        block_ip(ip)
        return make_response("Challenge failed. You are blocked.", 403)

    response = make_response("Solve this challenge: 2 + 2 = ?")
    response.set_cookie('challenge_solved', 'true', max_age=60)
    return response

# Process incoming traffic
def monitor_traffic(packet, ip, event_queue):
    if IP in packet and TCP in packet:
        ip_src = packet[IP].src

        if ip_src in whitelist:
            return  # Skip whitelisted IPs
        
        if ip_src != ip:
            return  # Skip traffic not from the monitored IP
        
        ip_packet_count[ip_src] = ip_packet_count.get(ip_src, 0) + 1
        
        # Log traffic in the queue
        event_queue.put(f"Traffic from {ip_src}: {packet.summary()}")

        # Exceeds the attack threshold
        if ip_packet_count[ip_src] > ATTACK_THRESHOLD:
            event_queue.put(f"Potential DDoS detected from {ip_src}. Blocking IP...")
            block_ip(ip_src)
            del ip_packet_count[ip_src]

# Block an IP using Windows Firewall
def block_ip(ip):
    cmd = f'netsh advfirewall firewall add rule name="Block {ip}" dir=in action=block remoteip={ip} profile=any'
    subprocess.run(cmd, shell=True)
    event_queue.put(f"IP {ip} has been blocked.")

# GUI for the application
def start_gui():
    def add_ip():
        ip = ip_entry.get()
        if ip and ip not in monitored_ips:
            monitored_ips.append(ip)
            ip_listbox.insert(END, ip)
            ip_entry.delete(0, END)

    def remove_ip():
        selected_ip = ip_listbox.curselection()
        if selected_ip:
            ip = ip_listbox.get(selected_ip)
            monitored_ips.remove(ip)
            ip_listbox.delete(selected_ip)

    def start_monitoring_thread():
        selected_ip_index = ip_listbox.curselection()
        if not selected_ip_index:
            # Display a message to the user or handle the error appropriately
            print("No IP selected for monitoring.")
            return

        ip = ip_listbox.get(selected_ip_index)
        new_tab = ttk.Frame(notebook)
        notebook.add(new_tab, text=f"Monitoring {ip}")

        text_widget = Text(new_tab)
        text_widget.pack(expand=True, fill='both')

        monitoring_thread = threading.Thread(target=start_monitoring, args=(ip, text_widget))
        monitoring_thread.daemon = True
        monitoring_thread.start()

    def update_status(text_widget):
        while not event_queue.empty():
            status = event_queue.get()
            text_widget.insert(END, status + "\n")
            text_widget.see(END)
        root.after(100, lambda: update_status(text_widget))

    root = Tk()
    root.title("Anti-DDoS Protection")

    Label(root, text="Enter IP Address to Monitor:").pack()

    ip_entry = Entry(root)
    ip_entry.pack()

    Button(root, text="Add IP", command=add_ip).pack()

    ip_listbox = Listbox(root)
    ip_listbox.pack()

    Button(root, text="Remove IP", command=remove_ip).pack()

    Button(root, text="Start Monitoring", command=start_monitoring_thread).pack()

    # Create a Notebook (tab manager)
    notebook = ttk.Notebook(root)
    notebook.pack(expand=True, fill='both')

    root.mainloop()

# Start monitoring the IP addresses
def update_status(text_widget):
    while not event_queue.empty():
        status = event_queue.get()
        text_widget.insert(END, status + "\n")
        text_widget.see(END)
    root.after(100, lambda: update_status(text_widget))

def start_monitoring(ip, text_widget):
    sniff(prn=lambda packet: monitor_traffic(packet, ip, event_queue), store=0)
    update_status(text_widget)

if __name__ == "__main__":
    # Start Flask app in a separate thread
    flask_thread = threading.Thread(target=app.run, kwargs={'port': 5000})
    flask_thread.daemon = True
    flask_thread.start()

    # Start the GUI
    start_gui()
