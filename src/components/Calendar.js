import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'
import CalendarItem from './CalendarItem'


@inject('PlanetsStore')

@observer

class Calendar extends Component{
    
    render(){
       
        var planets = this.props.PlanetsStore.planetsKeyArr;
        return (
          <div id='calendar'> {planets.map((planet, index) => <CalendarItem planet={planet} />)} </div>
           )

    }

}

export default Calendar