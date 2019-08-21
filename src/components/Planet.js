import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';
import PlanetsStore from './../stores/PlantesStore'

inject('PlanetsStore')
@observer

class Planet extends Component {

  popup = (e) => {
   
    this.props.PlanetsStore.planetPop(e.currentTarget.id)
  }

  render() {
    let Id = this.props.PlanetsStore.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} >
          {this.props.PlanetsStore.Planets[Id]=="planetbig"?<dl className="infos" >
            <dd>this animation been made by pure cssjjj jkjlk kjlkjlk lkjljlk </dd> </dl>:null}
        </div>
      </div>
    </div>


  }
}

export default Planet;