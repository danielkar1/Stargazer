import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';

@inject('PlanetsStore')
@inject('ThreeDstore')
@observer

class Planet extends Component {


  popup = (e) => {
   
    this.props.PlanetsStore.planetPop(e.currentTarget.id)
  }

  render() {
    let Id = this.props.planetsKeyArr
    return <div id={Id} className={this.props.PlanetsStore.Planets[Id]}  >
      <div className="pos"  >
        <div className='planet' id={Id} onClick={this.popup} >
          {/* <div></div> */}
          {this.props.PlanetsStore.Planets[Id]=="planetbig"?<dl className="infos" >
            <dd>this animation been made by pure css
            </dd>
          </dl>:null}
        </div>
      </div>
    </div>


  }
}

export default Planet;