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
        this.planetsinfo={'earth': "A year its the time a planet completes an orbit around the sun", 'sun': "this is the sun", "mercury": " A single year lasts only 88 days,a day lasts 176 Earth days, 1440 hours.  ", "venus": "the sun rises only two times a year, which means only two days!", "mars": "this animation made with Css"}
        this.welcome="Here you can see the passage and days on each planet and the years span relative to earth the data derived from the animation movement"
    }
    
    render(){
      let choosenPlanet=this.props.PlanetsStore.CurrentPlanetClicked 
           return(
        <div className="planetInfo" > 
          {choosenPlanet==''? this.welcome : this.planetsinfo[choosenPlanet]}
           
            </div> 
       
           )}

}

export default PlanetsInfo