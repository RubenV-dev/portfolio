import React from 'react';
import { IoLogoJavascript } from 'react-icons/io'
import { DiRuby } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'

export default class About extends React.Component {
  render() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p className="description">______________________</p>
            <img className="ab-pic" src="https://drive.google.com/uc?id=16s2_P0Ou-JcrwiCTs9GdDkkO7015VA-0" alt="profile pic" height="200px" width="200px"/>
            <p className="description">Full Stack Software Engineer</p>
            <p className="description">Full Stack Web Developer with experience in React/Redux/React-Vis, Javascript, Ruby/Rails, HTML5, SQL and Custom CSS.
              Self-driven developer with a strong desire to work with an institution that 
              has a mission to improve society's quality of life. I first discovered my passion for coding while helping my previous research team move to paperless data collection. With 2 years experience 
              in research based data collection and analysis, I bring strong analytical skills 
              to tech projects with a compelling desire to build projects that create an impact in society.
            </p>
            <ul className="skills">
            <li>
                <DiRuby size="4.375rem"/>
                <p>Ruby</p>
            </li>
            <li>
                <IoLogoJavascript size="4.375rem"/>
                <p>Javascript</p>
            </li>
            <li>
                <FaReact size="4.375rem"/>
                <p>React</p>
            </li>
            <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFOtmtEkHoq8jiAoPD1cahWWOJqcOlVLxUYjQ3-JJYflZVaZ_W" alt="redux" width="70px" height="70px"/>
                <p>Redux</p>
            </li>
            <li>
                <AiOutlineHtml5 size="4.375rem"/>
                <p>HTML5</p>
            </li>
            <li>
                <DiPostgresql size="4.375rem"/>
                <p>PostgreSQL</p>
            </li>
        </ul>
        </div>
    )
  } 
}

