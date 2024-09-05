import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import DDosDetection from "./component/DDosDetection";
import DdosMitigation from "./component/DDosMitigation";
import DDosMonitoring from "./component/DDosMonitoring";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <DDosDetection />
      <DdosMitigation />
      <DDosMonitoring />
    </div>
  );
}

export default App;
