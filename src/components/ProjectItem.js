import React from "react";
import {Link} from 'react-router-dom';

function ProjectItem({image, name, link}) {
    return (
        <Link to={link} target="_blank">
            <div className="projectItem">
                <div loading="lazy" style={{backgroundImage: `url(${image})`}} className="bgImage"/>
                <h1>{name}</h1>
            </div>        
        </Link>
    )
}

export default ProjectItem;