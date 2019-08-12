import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';

@inject('PlanetsStore')
@inject('ThreeDstore')
@observer

class Planet extends Component {


  popup = (e) => {
   
    this.props.PlanetsStore.Popup(e.currentTarget.id)
  }

  // contentcontainer = (e) => {
  //   this.props.PlanetsStore.contentcontainer(e.target.id)
  // }
  render() {
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} >
          <div></div>
          {this.props.PlanetsStore.Planets[Id]=="planetbig"?<dl className="infos" >
            <dd>"this is your solar system, the planets infos will
              be upadated soon with an info bank, in the future it will
              take info and pictures from space Api's"
            </dd>
          </dl>:console.log("got here")}
        </div>
      </div>
    </div>


  }
}

export default Planet;