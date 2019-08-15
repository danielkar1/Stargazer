import React, { Component } from 'react';
import Planets from './Planets'
import { observer, inject } from 'mobx-react';
import SolarSystem from './SolarSystem';
import LoginContainer from './LoginContainer'
import Navbar from './Navbar'
import User from './User'

@inject('PlanetsStore')
@inject('UserStore')
@observer

class Universe extends Component {

    render() {
        return <div id="universe">
            <Navbar/>  
            <SolarSystem />
            {this.props.UserStore.loginpopup? <User/> : null}
        </div>

    }

}

export default Universe;