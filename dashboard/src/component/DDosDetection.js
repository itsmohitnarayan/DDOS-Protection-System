import React from "react";
import "./DDosDetection.css";

function DDosDetection() {
  // Sample data
  const metrics = {
    totalRequests: "1,200,000",
    suspiciousRequests: "15,000",
    attackType: "SYN Flood",
    attackStatus: "Active",
  };

  const alerts = [
    {
      id: 1,
      time: "10:00 AM",
      message: "SYN Flood detected from IP 192.168.0.1",
    },
    { id: 2, time: "10:30 AM", message: "Increased traffic on port 80" },
    {
      id: 3,
      time: "11:00 AM",
      message: "Potential DDoS attack mitigation initiated",
    },
  ];

  return (
    <div className="ddos-detection">
      <h1>DDoS Detection</h1>
      <div className="metrics">
        <div className="metric">
          <h3>Total Requests</h3>
          <p>{metrics.totalRequests}</p>
        </div>
        <div className="metric">
          <h3>Suspicious Requests</h3>
          <p>{metrics.suspiciousRequests}</p>
        </div>
        <div className="metric">
          <h3>Attack Type</h3>
          <p>{metrics.attackType}</p>
        </div>
        <div className="metric">
          <h3>Attack Status</h3>
          <p className={`status ${metrics.attackStatus.toLowerCase()}`}>
            {metrics.attackStatus}
          </p>
        </div>
      </div>
      <div className="alerts">
        <h2>Recent Alerts</h2>
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              <span className="time">{alert.time}</span> -{" "}
              <span className="message">{alert.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DDosDetection;
