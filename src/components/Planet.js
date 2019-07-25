import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContentContainer from './ContentContainer';
import mutationObserver from '../mutation'
@inject('PlanetsStore', 'ThreeDstore')

@observer

class Planet extends Component {

 
//   mutationRealtime=()=>{
//       mutationObserver.observe(document.documentElement, {
//         attributes: true,
//         characterData: true,
//         childList: true,
//         subtree: true,
//         attributeOldValue: true,
//         characterDataOldValue: true
//       });
// }


  popup = (e) => {

    this.props.PlanetsStore.Popup(e.currentTarget.id)

  }

  contentcontainer = (e) => {
    this.props.PlanetsStore.contentcontainer(e.target.id)
  }
  render() {
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} onChange={this.props.ThreeDstore.stylesheet(Id)}  >
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