import React, {useState, useEffect} from "react";
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    const linkMapping = [
      { uri: "/", displayName: "Home" },
      { uri: "/projects", displayName: "Projects" },
      { uri: "/gallery", displayName: "Gallery" }
    ]

    return (
        <div className="navbar" id={expandNavbar ? "open": "close"}>
            <div className="navbar-align">
              <div className="toggleButton">
                  <button onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                      <ReorderIcon/> 
                  </button>
              </div>
              <div className="links">
                {linkMapping.map((link, index) => (
                  <Link key={index} to={link.uri}> 
                    <div class="displayLink">
                      <span class="displayLinkNumber">
                        {String(index + 1).padStart(2, '0')}. 
                      </span>
                      <span class="dispayLinkName">
                        {link.displayName}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        </div>
    )
}

export default Navbar;
