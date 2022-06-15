import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
      <div className="design-by"></div>
        <h2><a href="https://github.com/fixmaspe" ><i className="fab fa-github" /></a></h2>
        <p><div className="design-by">CONTACTO</div></p>
      </div>
      <div className="footer-contact">
        <h3>🐧 @fixmaspe 🧉🟢💥</h3>

        <p></p>

      </div>

      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/max-rodriguez-fixmaspe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGbdYbfzZRLGrkeZubM%2Fniw%3D%3D" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/max_rodriguez_" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100073939718487" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
