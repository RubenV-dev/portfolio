import React from 'react';
// import { Route, Switch} from 'react-router-dom'
import Welcome from '../Components/welcome'

export default class MainContainer extends React.Component {
  render() {
    return (
        <div className="main">
           <Welcome />
        </div>
    )
  } 
}

