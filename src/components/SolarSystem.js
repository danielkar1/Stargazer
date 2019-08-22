import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import '../ContentContainer.css'

@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class SolarSystem extends Component{
    
    render(){
        // this.props.ThreeDstore.showPercent()
           return(
        <div id="solar-system" >
       
            
            <Planets/>
            </div> 
       
           )}

}

export default SolarSystem
