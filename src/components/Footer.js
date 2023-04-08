import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Link from '@material-ui/core/Link';

import '../styles/Footer.css';


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="socialMedia"> 
            <Link href="https://github.com/SamB032" target="_blank" >
                <GitHub/>
            </Link>

            <Link href="https://www.linkedin.com/in/samboffey/" target="_blank" >
                <LinkedIn/>
            </Link>
               
            </div>
            <p>
                &copy;
                <span>{currentYear} </span>
                samb032.github.io/portfolio-website
            </p>
        </div>
    )
}

export default Footer;