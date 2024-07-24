import React from "react";
import "./Works.css"; // Ensure this path is correct

// Import project images
import t1 from "../../assets/Pathways.jpg";
import t2 from "../../assets/BookedTalent.jpg";

const Works = () => {
  return (
    <div id="works" className="works-container">
      <div className="works-list-container">
        {/* desc */}
        <div className="works-desc-container">
          <h1>
            My Recent <span>Works</span>
          </h1>
        </div>
        {/* item */}
        <div className="works-item-container">
          <div className="works-item">
            <h3>Pathways</h3>
            <a
              href="https://mentorpal.org/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={t1} alt="Pathways" />
            </a>
            <div className="item-desc">
              <p>
                Pathways is a grant-funded project designed to reinforce its
                long-term impact by providing students with direct mentor
                contact options, personalized recommendations based on their
                interactions, post-test surveys to evaluate their knowledge and
                career plans, and follow-up emails to encourage continued use of
                the platform while using feedback to drive ongoing improvements.
              </p>
            </div>
          </div>
          <div className="works-item">
            <h3>BookedTalent</h3>
            <a
              href="https://www.bookedtalent.com/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={t2} alt="BookedTalent" />
            </a>
            <div className="item-desc">
              <p>
                BookedTalent is a web application that collects and stores
                information on Hollywood talents, including union and non-union
                background actors, stand-ins, and photo doubles. It enables
                searches for talent availability based on various criteria such
                as experience, unique abilities, props, wardrobe, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
