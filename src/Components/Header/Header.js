import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src="/photo.jpg" alt="Profile" className="profile-img" />
      {/* header content */}
      <div className="header-content">
        <h1 className="fullname">Vicky Wei</h1>
        <h2>Full-Stack software developer</h2>

        {/* profile links */}
        <div className="header-profile-container">
          <a
            href="https://drive.google.com/file/d/1au6HRCSBJ_9LAJcUc8EA9gIPjeOrgUfY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/vickyaawei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/VickyaWei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="mailto:vickyaa.wei@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
