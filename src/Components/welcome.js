import React from 'react';
import Nav from './nav'
import About from './about'
import Contact from './contact'
// import Skills from './skills'
import Projects from './Projects'

export default class Welcome extends React.Component {
  render() {
    return (
        <div className="welcome">
            <Nav />
            <About />
            <Projects />
            <Contact />
        </div>
    )
  } 
}


