import React from "react";
import "./Works.css";
import w1 from "../../assets/Lottery.png";
import w2 from "../../assets/DBbill.png";
import w3 from "../../assets/FullyLink.png";
const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item" >
          <a href = "https://github.com/VickyaWei/LotterySystem">
            <img src={w1} alt="work1" />
          </a>
        </div>
        <div className="works-item" >
          <a href = "https://github.com/VickyaWei/DBbill">
            <img src={w2} alt="work2" />
          </a>
        </div>
        <div className="works-item">
          <a href = "https://github.com/VickyaWei/FullyLink">
            <img src={w3} alt="work3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
