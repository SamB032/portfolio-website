import React from "react";
import {Link} from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';

function ProjectItem({image, name, link, description}) {
    return (
        <Link to={link} target="_blank" className="project-card">
          <div className="project-image-container">
            <div 
              loading="lazy" 
              style={{backgroundImage: `url(${image})`}} 
              className="project-bg"
            />
          </div>

          <div className="project-text">
            <div className="project-header">
              <h3 className="project-title">{name}</h3>
              <CallMadeIcon/>
            </div>
            <p className="project-description">{description}</p>
          </div>
        </Link>
    )
}

export default ProjectItem;
