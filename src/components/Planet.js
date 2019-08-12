import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContentContainer from './ContentContainer';

@inject('PlanetsStore')
@inject('ThreeDstore')
@observer

class Planet extends Component {


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
        <div className='planet' id={Id} onClick={this.popup} >
          <div></div>
          {this.props.PlanetsStore.ifClicked?<dl className="infos" >
            <dt>this is oneffffffffff</dt>
            <dd>look it two, bla bla ,dj;ljd/
              kfdlj;fjf ;ddk;ljd dsfsdfdfdsf fsdfsdfsdf
            </dd>
          </dl>:null}
        </div>
      </div>
    </div>


  }
}

export default Planet;