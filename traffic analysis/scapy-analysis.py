from scapy.all import sniff

def analyze_packet(packet):
    # Analyze packet for DDoS patterns
    if packet.haslayer('IP'):
        ip_src = packet['IP'].src
        ip_dst = packet['IP'].dst
        print(f"IP packet: {ip_src} -> {ip_dst}")

sniff(prn=analyze_packet, store=0)
