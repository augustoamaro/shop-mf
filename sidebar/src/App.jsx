import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Sidebar from "./Sidebar";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Sidebar />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
