import React from 'react';
import { IoLogoJavascript } from 'react-icons/io'
import { DiRuby } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'

export default class Skills extends React.Component {
  render() {
    return (
        <ul className="skills">
            <li>
                <DiRuby size="50px"/>
                <p>Ruby</p>
            </li>
            <li>
                <IoLogoJavascript size="70px"/>
                <p>Javascript</p>
            </li>
            <li>
                <FaReact size="70px"/>
                <p>React</p>
            </li>
            <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFOtmtEkHoq8jiAoPD1cahWWOJqcOlVLxUYjQ3-JJYflZVaZ_W" alt="redux" width="75px" height="75px"/>
                <p>Redux</p>
            </li>
            <li>
                <AiOutlineHtml5 size="70px"/>
                <p>HTML5</p>
            </li>
            <li>
                <DiPostgresql size="70px"/>
                <p>PostgreSQL</p>
            </li>
        </ul>
    )
  } 
}

