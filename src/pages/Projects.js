import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name = "Web3 Hackathon Solidity" image={Proj1}/>
        <ProjectItem name = "Bruce Photography" image={Proj2}/>
      </div>
    </div>
  )
}

export default Projects