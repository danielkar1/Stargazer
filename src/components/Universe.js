import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SolarSystem from './SolarSystem';
import LoginContainer from './LoginContainer'
import './../LoginContainer.css';
import Navbar from './Navbar'
import Calendar from './Calendar';
import PlanetsInfo from './PlanetsInfo';

@inject('PlanetsStore','ThreeDstore')
@inject('UserStore')
@observer



class Universe extends Component {

    render() {
        
        return <div id="universe">
            {this.props.UserStore.loginpopup? <div>  <Navbar/>  <SolarSystem/> <Calendar/>    </div> : <LoginContainer/>}
        </div>

    }

}

export default Universe;