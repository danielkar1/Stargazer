import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContentContainer from './ContentContainer';

@inject('PlanetsStore')
@inject('ThreeDstore')
@observer

class Planet extends Component {


  popup = (e) => {

    this.props.PlanetsStore.Popup(e.currentTarget.id)
    if (this.props.PlanetsStore.Planets[e.target.id] === 'ss') {
      this.props.PlanetsStore.PlanetMode = 'planet'
    } else {
      this.props.PlanetsStore.PlanetMode = 'planet newCss'
    }
  }

  contentcontainer = (e) => {
    this.props.PlanetsStore.contentcontainer(e.target.id)
  }
  render() {
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  onmove={this.props.ThreeDstore.getPosition(Id)}>
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} >
          <div></div>
          <dl className="infos">
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    </div>


  }
}

export default Planet;