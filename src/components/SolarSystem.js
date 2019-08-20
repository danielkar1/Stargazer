import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import LoginContainer from './LoginContainer'
import User from './User';

@inject('PlanetsStore')
@inject('UserStore')
@observer

class SolarSystem extends Component{

    render(){
           return(
        <div id="solar-system" >
            <Planets/>
            </div> 
       
           )}

}

export default SolarSystem
