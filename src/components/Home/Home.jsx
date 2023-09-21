import React from "react";
import "./_Home.scss";
import getData from "../../utilities/fakeData";
import HomeCard from "../Home-card/HomeCard";

function Home({ enable }) {
  const data = getData();
  if (enable) {
    if (data.length !== 0) {
      return (
        <div className="home">
          {data.map((item, index) => {
            return <HomeCard item={item} key={index} />;
          })}
        </div>
      );
    }
  }
}

export default Home;
