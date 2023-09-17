import React from "react";
import "./_navbar.scss";
import { Button } from "@mui/material";

function NavBtns({ navbarIndex, setNavbarIndex }) {
  return (
    <div className="items align-center flex-3 mt-10 flex flex justify-start gap-20">
      <section className="btn-home-container relative">
        <Button variant="text" onClick={() => setNavbarIndex(0)}>
          خانه
        </Button>
        {navbarIndex === 0 && <hr className="hr-0 absolute" />}
      </section>

      <section className="btn-products-container relative">
        <Button variant="text" onClick={() => setNavbarIndex(1)}>
          محصولات
        </Button>
        {navbarIndex === 1 && <hr className="hr-1 absolute" />}
      </section>

      <section className="btn-products-container relative">
        <Button variant="text" onClick={() => setNavbarIndex(2)}>
          سایر
        </Button>
        {navbarIndex === 2 && <hr className="hr-2 absolute" />}
      </section>
    </div>
  );
}

export default NavBtns;
