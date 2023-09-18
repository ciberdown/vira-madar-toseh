import React from "react";
import "./_navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import NavBtns from "./btns_navbar_items";

function Navbar({ navbarIndex, setNavbarIndex }) {
  return (
    <div className="primary width-full flex justify-center">
      <div className="navbar border-box height-80 width-full align-center flex justify-center p-10">
        <div className="circle"></div>

        <h1 className="company-name text-primary flex-2 mt-20">
          ویرا برگ توسعه
        </h1>

        <NavBtns navbarIndex={navbarIndex} setNavbarIndex={setNavbarIndex} />
        <div className="circle circle-2"></div>

        <input
          className="search-box flex-3"
          type="text"
          placeholder="جست و جو ..."
        />

        <div
          className="align-right flex-1 justify-center"
          style={{ zIndex: 2 }}
        >
          <MenuIcon
            className="burger text-primary mt-5"
            sx={{
              cursor: "pointer",
              fontSize: "28px",
              transition: "scale .1s linear",
              ":hover": { scale: "1.2" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
