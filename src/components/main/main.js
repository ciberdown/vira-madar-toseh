import React, { useState } from "react";
import "./_main.scss";
import Navbar from "../navbar/nvabar";
import Home from "../Home/Home";
import Products from "../Products/products";
import Other from "../other/other";

function Main() {
  const [navbarIndex, setNavbarIndex] = useState(0);
  return (
    <div className="main">
      <Navbar navbarIndex={navbarIndex} setNavbarIndex={setNavbarIndex} />
      <div className="main-container">
        <Home enable={navbarIndex === 0} />
        <Products enable={navbarIndex === 1} />
        <Other enable={navbarIndex === 2} />
      </div>
    </div>
  );
}

export default Main;
