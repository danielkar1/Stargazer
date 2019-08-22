import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';
import PlanetsStore from './../stores/PlantesStore'
import ThreeDstore from './../stores/ThreeDstore'
@observer

class Planet extends Component {

  popup = (e) => { 
     PlanetsStore.planetPop(e.currentTarget.id)
     ThreeDstore.Get(e.currentTarget.id)
  }

//  componentDidMount=()=>{
//    let planet=PlanetsStore.planetsKeyArr
//    console.log(planet)
//    planet.forEach(element => {
//    ThreeDstore.Get(element) 
//  });
//  }
  render() {
   
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} > 
        <div id="animProg">{ThreeDstore.currentPercent[Id]}%</div>
          {PlanetsStore.Planets[Id]=="planetbig"?<dl className="infos" >
            <dd>this animation been made by pure cssjjj jkjlk kjlkjlk lkjljlk </dd> </dl>:null}
        </div>
      </div>
    </div>


  }
}

export default Planet;