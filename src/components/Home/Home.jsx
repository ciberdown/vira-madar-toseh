import React from "react";
import "./_Home.scss";

function Home({ enable }) {
  if (enable) return <div className="Home">Home</div>;
}

export default Home;
