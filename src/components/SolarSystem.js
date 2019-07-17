import React, { Component } from 'react';
import Planets from './Planets'
import ContentContainer from './ContentContainer'
class SolarSystem extends Component{

    render(){
           return(
        <div id="solar-system" >
            <ContentContainer/>
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
