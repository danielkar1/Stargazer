import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContentContainer from './ContentContainer';
import mutationObserver from '../mutation'
@inject('PlanetsStore', 'ThreeDstore')

@observer

class Planet extends Component {

  popup = (e) => {
    this.props.PlanetsStore.Popup(e.currentTarget.id)
  }

  handleClick = (e) => {
    let id=e.target.id
    this.props.ThreeDstore.Get(id)
  }

  contentcontainer = (e) => {
    this.props.PlanetsStore.contentcontainer(e.target.id)
  }
  render() {
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup}   >
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