import React from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import  LinkedInIcons  from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <TwitterIcon/>
            <LinkedInIcons/>
            <EmailIcon/>
        </div>
        <p> &copy; 2023 linktr.ee/brianmk</p>
    </div>
  )
}

export default Footer