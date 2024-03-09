import React from "react";
// import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>

      {/* copyright */}
      <div className="footer-copyright">
        <p>Created by Vicky Wei</p>
        <p>© 2024</p>
      </div>

      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.linkedin.com/in/vickyaawei/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/VickyaWei">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:vickyaa.wei@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
