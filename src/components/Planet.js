import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';
import PlanetsStore from './../stores/PlantesStore'
import ThreeDstore from './../stores/ThreeDstore'
@observer

class Planet extends Component {
  constructor(props) {
    super(props);
    this.intervalID = 0;
  }
  popup = (e) => { 
     PlanetsStore.planetPop(e.currentTarget.id)
     ThreeDstore.Get(e.currentTarget.id)
  }


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

  componentDidMount=()=>{
    let Id = this.props.planetsKeyArr
    this.intervalID =  ThreeDstore.showPercent(Id);
     console.log(Id)
   }

   
   componentWillUnmount=()=>{
     clearInterval(this.intervalID)
   }
 
 }

export default Planet;