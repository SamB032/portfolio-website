import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Link from '@material-ui/core/Link';
import '../styles/Footer.css';


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="socialMedia"> 

                <Link href="https://www.linkedin.com/in/samboffey/" target="_blank" >
                    <LinkedIn/>
                </Link>
                
                <Link href="https://github.com/SamB032" target="_blank" >
                    <GitHub/>
                </Link>

                <Link href="mailto:sam.boffey04@gmail.com" target="_blank" >
                    <Email/>
                </Link>
               
            </div>
            <p>
                &copy;
                <span> {currentYear}</span>
                <span> {window.location.hostname}</span>
            </p>
        </div>
    )
}

export default Footer;
