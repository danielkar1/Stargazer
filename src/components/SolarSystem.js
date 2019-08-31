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

    // drunkMode = (e) => { 
      
    //    this.props.ThreeDstore.Get("orbit")
    //  }
    
    render(){
           return(
        <div id="solar-system" > 
            {/* <button onClick={this.drunkMode}>Drunk mode</button> */}
            <Planets/>
           
            </div> 
       
           )}

}

export default SolarSystem
