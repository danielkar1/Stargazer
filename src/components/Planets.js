import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlantesStore from '../stores/PlantesStore';
import Planet from './Planet';
import LoginContainer from './LoginContainer';


@inject('PlanetsStore')
@observer

class Planets extends Component {

   
    loadStars=()=>{
        this.props.PlanetsStore.getArray()
    }

    render() {
        this.loadStars()
        let planetsKeyArr=this.props.PlanetsStore.planetsKeyArr;
        let planetsValueArr=this.props.PlanetsStore.planetsValueArr;
        return (

            planetsKeyArr.map((planet, index) => <Planet planetsKeyArr={planet} planetsValueArr={planetsValueArr[planet]} key={index} />)
        )

    }
}
export default Planets;