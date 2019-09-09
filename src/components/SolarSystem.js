import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import Calendar from './Calendar';

@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class SolarSystem extends Component{

    
    render(){
           return(
        <div id="solar-system" > 

     
     {/* {this.props.PlanetsStore.CurrentPlanetClicked==''?<div id="welcome">
    "The Calander below follows the Animation in real-time and calculates the years and days on each planet relative to Earth 
     </div>:null}   */}
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
