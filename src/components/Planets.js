import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlantesStore from '../stores/PlantesStore';
import Planet from './Planet';
import ContentContainer from './ContentContainer';


@inject('PlanetsStore')
@observer

class Planets extends Component {

    render() {
        const planets = this.props.PlanetsStore.Planets
        const planetsKeyArr = []
        const planetsValueArr = []

        for (let [key, value] of Object.entries(planets)) {

            planetsKeyArr.push(key)

            planetsValueArr.push(value)

        }
        return (

            planetsKeyArr.map((planet, index) => <Planet planetsKeyArr={planet} planetsValueArr={planetsValueArr[planet]} key={index} />)
        )

    }
}
export default Planets;