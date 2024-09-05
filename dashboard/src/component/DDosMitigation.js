import React from "react";
import "./DDosMitigation.css";

function DDosMitigation() {
  // Sample data
  const metrics = {
    totalMitigations: "500",
    ongoingMitigations: "20",
    lastMitigation: "Successful",
    mitigationStatus: "Active",
  };

  const alerts = [
    {
      id: 1,
      time: "12:00 PM",
      message: "Mitigation initiated for IP 192.168.0.2",
    },
    { id: 2, time: "12:30 PM", message: "Mitigation in progress on port 443" },
    {
      id: 3,
      time: "01:00 PM",
      message: "Mitigation completed successfully",
    },
  ];

  return (
    <div className="ddos-mitigation">
      <h1>DDoS Mitigation</h1>
      <div className="metrics">
        <div className="metric">
          <h3>Total Mitigations</h3>
          <p>{metrics.totalMitigations}</p>
        </div>
        <div className="metric">
          <h3>Ongoing Mitigations</h3>
          <p>{metrics.ongoingMitigations}</p>
        </div>
        <div className="metric">
          <h3>Last Mitigation</h3>
          <p>{metrics.lastMitigation}</p>
        </div>
        <div className="metric">
          <h3>Mitigation Status</h3>
          <p className={`status ${metrics.mitigationStatus.toLowerCase()}`}>
            {metrics.mitigationStatus}
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

export default DDosMitigation;
