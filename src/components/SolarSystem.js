import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import '../ContentContainer.css'
import LoginContainer from './LoginContainer';
import Calendar from './Calendar';

@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class SolarSystem extends Component{
    
    render(){
        // this.props.ThreeDstore.showPercent()
           return(
        <div id="solar-system" >  
            <Planets/>
            <Calendar/>
            </div> 
       
           )}

}

export default SolarSystem
