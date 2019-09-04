import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'

@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class SolarSystem extends Component{

    
    render(){
           return(
        <div id="solar-system" > 

        
            <Planets/>
     {this.props.PlanetsStore.CurrentPlanetClicked==''?<div id="welcome">
    "The Calander below follows the Animation in real-time and calculates the years and days on each planet relative to Earth
     </div>:null}  
           
            </div> 
       
           )}

}

export default SolarSystem
