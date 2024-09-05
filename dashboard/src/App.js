import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import DDosDetection from "./component/DDosDetection";
import DdosMitigation from "./component/DDosMitigation";
import DDosMonitoring from "./component/DDosMonitoring";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* Main is rendered always */}
        <Main />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Default route */}
          <Route path="/ddos-detection" element={<DDosDetection />} />
          <Route path="/ddos-mitigation" element={<DdosMitigation />} />
          <Route path="/ddos-monitoring" element={<DDosMonitoring />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
