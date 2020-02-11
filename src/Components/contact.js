import React from 'react';
// import { NavLink } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'

export default class Icon extends React.Component {
  render() {
    return (
        <div className="contacts">
            <h2>Contact Me</h2>
            <p>
              <a href="https://docs.google.com/document/d/186FhaxKljawEePnXpeDqoDFW_gookFrk_x8kQ7eciQw/edit?usp=sharing" alt="resume">Resume</a>
            </p>
            <p>
            <FiPhone /> (347) 799-7892
            </p>
            <p>
            <a href="mailto:RubenVallejo101@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail /> RubenVallejo101@gmail.com</a>
            </p>
            <p>created by Ruben W. Vallejo | 2020</p>
        </div>
    )
  } 
}

