import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';
import planetsStore from './../stores/PlantesStore'
// import ThreeDstore from './../stores/ThreeDstore'
import animationStore from '../stores/ThreeDstore'
import PlanetsInfo from './PlanetsInfo'
import gameStore from '../stores/gameStore'

@observer

class Planet extends Component {
  constructor(props) {
    super(props);
    this.intervalID = 0;
  }
  popup = (e) => {
    // console.log(`you clicked on ${e.currentTarget.id}`) //check it out with someone
    let planetName=e.currentTarget.id
    planetsStore.planetPop(planetName)
  }


  render() {
    
    let Id = this.props.planetsKeyArr
    console.log(Id)
    console.log(planetsStore.Planets[Id].position)
    return <div id={Id} className={planetsStore.Planets[Id].classs}  >
      {animationStore.AnimatoinChange}
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} >
          {planetsStore.Planets[Id].classs == "planetbig" ? <dl class="infos"><dt><strong>{Id}</strong></dt><dd><dt><PlanetsInfo id={Id} /></dt></dd></dl> : null}
        </div>
      </div>

    </div>


  }

  componentDidMount = () => {
    let Id = this.props.planetsKeyArr
    this.intervalID = animationStore.showPercent(Id);
  }


  componentWillUnmount = () => {
    clearInterval(this.intervalID)
  }

}

export default Planet;