import React from 'react';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';
import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects">

            <p className="content"> 
                Here is my project portfolio. This is where can find serval of my past projects. 
                By clicking on a project, it will send you to github repository containing source code and
                instructions. 
            </p>

            <div className="projectList">
                {ProjectList.map((project) => {
                    return (
                        <ProjectItem key={project.name} name={project.name} image={project.image} link={project.link} target="_blank"/>
                    )
                })  }
            </div>
        </div>
    )
}

export default Projects;