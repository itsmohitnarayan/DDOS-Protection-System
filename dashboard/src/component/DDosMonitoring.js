import React from "react";
import "./DDosMonitoring.css";

function DDosMonitoring() {
  // Sample data
  const metrics = {
    activeMonitors: "12",
    incidentsDetected: "30",
    lastIncident: "IP 192.168.0.3",
    monitoringStatus: "Active",
  };

  const alerts = [
    {
      id: 1,
      time: "02:00 PM",
      message: "Monitoring initiated for IP 192.168.0.3",
    },
    { id: 2, time: "02:30 PM", message: "Incident detected on port 22" },
    {
      id: 3,
      time: "03:00 PM",
      message: "Additional monitoring resources allocated",
    },
  ];

  return (
    <div className="ddos-monitoring">
      <h1>DDoS Monitoring</h1>
      <div className="metrics">
        <div className="metric">
          <h3>Active Monitors</h3>
          <p>{metrics.activeMonitors}</p>
        </div>
        <div className="metric">
          <h3>Incidents Detected</h3>
          <p>{metrics.incidentsDetected}</p>
        </div>
        <div className="metric">
          <h3>Last Incident</h3>
          <p>{metrics.lastIncident}</p>
        </div>
        <div className="metric">
          <h3>Monitoring Status</h3>
          <p className={`status ${metrics.monitoringStatus.toLowerCase()}`}>
            {metrics.monitoringStatus}
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

export default DDosMonitoring;
