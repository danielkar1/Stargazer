import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import '../ContentContainer.css'


@inject('PlanetsStore')
@inject('UserStore','ThreeDstore')
@observer

class PlanetsInfo extends Component{
    constructor(){
        super()
        this.planetsinfo={'earth': "A year its the time a planet completes an orbit around the sun", 'sun': "this is the sun", "mercury": " A single year lasts only 88 days,a day lasts 176 Earth days, 1440 hours.  ", "uranus": "this is uranus", "mars": "this animation made with Css"}
    }
    
    render(){
      let choosenPlanet=this.props.PlanetsStore.CurrentPlanetClicked 
           return(
        <div className="planetInfo" > 
          {choosenPlanet==''? "welcome to solar-calander for more info, click on the planet you desire": this.planetsinfo[choosenPlanet]}
           
            </div> 
       
           )}

}

export default PlanetsInfo