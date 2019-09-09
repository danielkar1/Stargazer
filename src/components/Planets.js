import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlantesStore from '../stores/PlantesStore';
import Planet from './Planet';
import LoginContainer from './LoginContainer';
import PlanetsInfo from './PlanetsInfo'
import Calendar from './Calendar';

    

@inject('PlanetsStore', 'ThreeDstore')
@observer

class Planets extends Component {
   

    componentDidMount=()=>{
        this.props.PlanetsStore.getArray()
    }
    render() {
        
        let planetsKeyArr=this.props.PlanetsStore.planetsKeyArr;
        let planetsValueArr=this.props.PlanetsStore.planetsValueArr;
        return ( 
            
         <div>
           {this.props.ThreeDstore.AnimatoinChange}
           {planetsKeyArr.map((planet, index) => <Planet planetsKeyArr={planet} planetsValueArr={planetsValueArr[planet]} key={index} />)}
        </div>
        )

    }
}
export default Planets;