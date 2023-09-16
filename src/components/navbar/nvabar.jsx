import React from "react";
import "./_navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className="primary width-full flex justify-center">
      <div className="navbar border-box height-100 width-full align-center flex justify-center p-10">
        <p className="company-name flex-2 mt-20">ویرا برگ توسعه</p>

        <div className="items align-center flex-4 flex mt-10 flex justify-start gap-20">
          <Button variant="text" style={{ color: "white" }}>
            خانه
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            محصولات
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            سایر
          </Button>
        </div>

        <div className="align-right flex-2">
          <MenuIcon style={{ color: "white", fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
