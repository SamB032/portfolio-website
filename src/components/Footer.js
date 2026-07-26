import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/samboffey/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>

        <a
          href="https://github.com/SamB032"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHub />
        </a>

        <a href="mailto:sam.boffey04@gmail.com" aria-label="Email">
          <Email />
        </a>
      </div>
      <p>
        &copy;
        <span> {currentYear}</span>
        <span> {window.location.hostname}</span>
      </p>
    </div>
  );
}

export default Footer;
