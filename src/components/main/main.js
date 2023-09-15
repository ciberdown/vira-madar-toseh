import React from "react";
import "./_main.scss";
import Navbar from "../navbar/nvabar";

function Main() {
  return (
    <div className="main">
      <Navbar data={['Home', 'info']}/>
    </div>
  );
}

export default Main;
