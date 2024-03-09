import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hey</h1>
        <h1 className="fullname">I'm Vicky Wei</h1>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,

              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
        I am an international student from China, <br></br>
        currently pursuing a software engineering degree in CSUF. <br></br>
        Passionate about programming and software development, <br></br>
        I've cultivated a strong coding foundation and mastered<br></br>
        multiple programming languages and development tools <br></br>
        through my studies and practical experiences.
        </p>
        
 
        {/* profile links */}
        <div className="header-profile-container">
          <button href="/">Contact Me</button>
          <a href="https://www.linkedin.com/in/vickyaawei/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/VickyaWei" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:vickyaa.wei@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-envelope"></i>
          </a>  
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>         
        </div>
      </div>

      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        {/* <div className="circle-1"></div>
        <div className="circle-2"></div> */}
      </div>
    </div>
  );
};

export default Header;
