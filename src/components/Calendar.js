import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import CalendarItem from './CalendarItem'


@inject('PlanetsStore')

@observer

class Calendar extends Component{
    
    render(){
       
        let planets = this.props.PlanetsStore.planetsKeyArr;
         delete planets[0]
        return (
          <div id='calendar'> {planets.map((planet, index) => <CalendarItem planet={planet} />)} </div>
           )

    }

}

export default Calendar