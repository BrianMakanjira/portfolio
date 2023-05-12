import React from 'react';
import EmailIcon from "@material-ui/icons/Email";
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import  GitHubIcon  from '@material-ui/icons/GitHub';
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Brian</h2>
        <div className="prompt"><p> A FullStack Developer who is eager to learn and create</p>
        <EmailIcon/>
        <GitHubIcon/>
        <LinkedInIcon/>
        </div>
      </div>
      <div className="skills"> 
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>ReactJS, HTML, CSS, Tailwind, NPM, Bootstrap, MaterialUI, ThreeJS</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>NodeJS, RubyonRails, Laravel, AWS, MySQL, Django</span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>Python, PHP, C++, Go, Solidity, Java</span>
        </li>
      </ol>
      </div>
    </div>
  )
}

export default Home