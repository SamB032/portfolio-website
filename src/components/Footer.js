import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Link from '@material-ui/core/Link';

import '../styles/Footer.css';

function Footer() {
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
                2023
                websiteURL
            </p>
        </div>
    )
}

export default Footer;