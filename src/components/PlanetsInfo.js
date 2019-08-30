import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import '../ContentContainer.css'


@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class PlanetsInfo extends Component{
    
    render(){
        
           return(
        <div className="planetInfo" > 
       {this.props.planet}
           
            </div> 
       
           )}

}

export default PlanetsInfo