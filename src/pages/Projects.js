import React from 'react';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';
import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects">
            
            <h2 className="projectsHeader">Projects</h2>

            <p className="content text"> 
                Here are my various projects that I have completed along with source code.
                
                Clicking any of the cards will take you to Github with an explaination of what is does and how it works.
            </p>

            <div className="projectList">
                {ProjectList.map((project) => {
                    return (
                        <ProjectItem 
                          key={project.name} 
                          name={project.name} 
                          image={project.image} 
                          link={project.link} 
                          description={project.description}
                          target="_blank"
                        />
                    )
                })  }
            </div>
        </div>
    )
}

export default Projects;
