import React from 'react';
import { FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMedium } from 'react-icons/ai'
// import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
        <div className="nav">
           <div className="name">Ruben W. Vallejo</div>
           <ul className="icon-links">
             <li>
            <a href="https://www.instagram.com/ruben_will/">
                <AiOutlineInstagram size="40px"/>
            </a>
            </li>
            <li>
            <a href="https://github.com/RubenV-dev">
                <FiGithub size="40px" />
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ruben-vallejo-a5317baa/">
              <AiOutlineLinkedin size="40px"/>
            </a>
            </li>
            <li>
            <a href="https://medium.com/@rv.results">
              <AiOutlineMedium size="40px"/>
                </a>
                </li>
                </ul>
        </div>
    )
  } 
}

