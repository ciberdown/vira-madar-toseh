import React from "react";
import { navbarBackground } from "../../utilities/colors";
import "./_navbar.scss";

function Navbar({ data }) {
  console.log(data);
  return (
    <div
      className="navbar align-center flex justify-center"
      style={{ backgroundColor: navbarBackground }}
    >
      <p className="company_name">Vira Barg Toseh</p>

      <div className="items align-center justify-space-between flex">
        {data.map((item, index) => {
          return (
            <p key={index} className="item">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
