import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginContainer from './LoginContainer';
import PlanetsStore from './../stores/PlantesStore'
import ThreeDstore from './../stores/ThreeDstore'
import PlanetsInfo from './PlanetsInfo'
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
      {/* <PlanetsInfo planet={Id}/> */}
        <div className='planet' id={Id} onClick={this.popup} > 
          {PlanetsStore.Planets[Id]=="planetbig"?<dl className="infos" >
         <dd> text needs to be in the center</dd></dl>:null}
        <dd>{ThreeDstore.currentPercent[Id]}%</dd>
        </div>
      </div>
      </div>
      {/* {PlanetsStore.Planets[Id]=="planetbig"?
         :null} */}


  }

  componentDidMount=()=>{
    let Id = this.props.planetsKeyArr
    this.intervalID =  ThreeDstore.showPercent(Id);
   }

   
   componentWillUnmount=()=>{
     clearInterval(this.intervalID)
   }
 
 }

export default Planet;