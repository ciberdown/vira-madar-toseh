import React from "react";
import "./_HomeCard.scss";
import getRandomColor from "../../utilities/lightenColor";

function HomeCard({ item }) {
  console.log(item);
  const { rndColor, shadow } = getRandomColor();
  console.log(rndColor, shadow);
  return (
    <div
      className="home-item"
      style={{ backgroundColor: rndColor, boxShadow: shadow }}
    >
      <section className="circle-i"></section>

      {/* <img src="" alt="" />

      <h2>{item.name}</h2>
      <h3>{item.title}</h3>

      <div className="popularity">
        <p className="num">{item.popularity}</p>
        <p>popularity</p>
      </div>
      <div className="like">
        <p className="num">{item.ranking}</p>
        <p>like</p>
      </div>
      <div className="followed">
        <p className="num">{item.forward}</p>
        <p>followed</p>
      </div>

      <div className="ranking-sec">
        <h3>{item.ranking}</h3>
        <p>ranking</p>
      </div>

      <MoreHorizIcon className="more-icon" /> */}
    </div>
  );
}

export default HomeCard;
