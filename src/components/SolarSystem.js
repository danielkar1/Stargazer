import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import '../ContentContainer.css'
import LoginContainer from './LoginContainer';
import PlanetsInfo from './PlanetsInfo'

@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class SolarSystem extends Component{

    
    render(){
           return(
        <div id="solar-system" > 

     {this.props.PlanetsStore.CurrentPlanetClicked==''?<div id="welcome">The days and years dervied from the current animation position. A day is a full spin of a planet on its axis and a solar-year its the 360deg orbit around the sun.The time presented is ralative to Earth days and years, On Mars one year is 687 earth days. You can click the planets for more info, watch out from the sun...</div>:null}  
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
