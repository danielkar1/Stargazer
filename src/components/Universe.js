import React, { Component } from 'react';
import Planets from './Planets'
import { observer, inject } from 'mobx-react';
import SolarSystem from './SolarSystem';
import LoginContainer from './LoginContainer'
import './../LoginContainer.css';
import Navbar from './Navbar'
import User from './User'

@inject('PlanetsStore','ThreeDstore')
@inject('UserStore')
@observer



class Universe extends Component {

    render() {
        
        return <div id="universe">
            {this.props.UserStore.loginpopup? <div>  <Navbar/>  <SolarSystem/>  </div> : <LoginContainer/>}
        </div>

    }

}

export default Universe;