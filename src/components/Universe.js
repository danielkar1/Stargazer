import React, { Component } from 'react';
import Planets from './Planets'
import { observer, inject } from 'mobx-react';
import SolarSystem from './SolarSystem';
import LoginContainer from './LoginContainer'
import Navbar from './Navbar'
import User from './User'

@inject('PlanetsStore','ThreeDstore')
@inject('UserStore')
@observer



class Universe extends Component {

    render() {
        
        return <div id="universe">
            <Navbar/>
            <LoginContainer/>
            {/* <div id="animProg">{this.props.ThreeDstore.currentPercent}ddd</div> */}
            <SolarSystem />
            {this.props.UserStore.loginpopup? <User/> : null}
        </div>

    }

}

export default Universe;