import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import Planets from './Planets'
import ContentContainer from './ContentContainer'

@inject('PlanetsStore', 'ThreeDstore')
@observer
class SolarSystem extends Component{
    
    render(){
        this.props.ThreeDstore.showPercent()
           return(
        <div id="solar-system" >
            <ContentContainer/>
            <div id="animProg"></div>
            
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
