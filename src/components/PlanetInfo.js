import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlantesStore from '../stores/PlantesStore';
import Planet from './Planet';
import LoginContainer from './LoginContainer';


@inject('PlanetsStore', 'ThreeDstore')
@observer

class PlanetsInfo extends Component {
   

    componentDidMount=()=>{
        this.props.PlanetsStore.getArray()
    }
    render() {
       
        let planetsKeyArr=this.props.PlanetsStore.planetsKeyArr;
        
        return (

            planetsKeyArr.map((planet, index) => <Planetinfo planetsKeyArr={planet} planetsValueArr={planetsValueArr[planet]} key={index} />)
        )

    }
}
export default PlanetsInfo;