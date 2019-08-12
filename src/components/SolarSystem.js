import React, { Component } from 'react';
import Planets from './Planets'
import LoginContainer from './LoginContainer'
class SolarSystem extends Component{

    render(){
           return(
        <div id="solar-system" >
            <LoginContainer/>
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
