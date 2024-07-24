import React from "react";
import "./Services.css";

// Import project images
import w1 from "../../assets/Lottery.png";
import w2 from "../../assets/DBbill.png";
import w3 from "../../assets/FullyLink.png";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Projects</span>
          </h1>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
          <h3>Lottery System</h3>
            <a href="https://github.com/VickyaWei/LotterySystem" target="_blank" rel="noopener noreferrer">
              <img src={w1} alt="Lottery System" />
            </a>
            <div className="item-desc">
              
              <p>
                This is a lottery system featuring diverse gameplay mechanics,
                implementing differentiated strategies based on age, gender, and
                first-order spending to meet the varied needs of different user
                segments.
              </p>
            </div>
          </div>
          <div className="services-item">
          <h3>DBbill Platform</h3>
            <a href="https://github.com/VickyaWei/DBbill" target="_blank" rel="noopener noreferrer">
              <img src={w2} alt="DBbill Platform" />
            </a>
            <div className="item-desc">
              
              <p>
                This is an online financing platform where suppliers and brand
                owners can connect to banks, creating opportunities for
                suppliers to access financing and secure funds in advance.
              </p>
            </div>
          </div>
          <div className="services-item">
          <h3>FullyLink Social</h3>
            <a href="https://github.com/VickyaWei/FullyLink" target="_blank" rel="noopener noreferrer">
              <img src={w3} alt="FullyLink Social" />
            </a>
            <div className="item-desc">
              
              <p>
                This is a website developed for CSUF students’ authentication,
                blog post management, comment handling, and image upload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
