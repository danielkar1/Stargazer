import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Planets from './Planets'


@inject('PlanetsStore','ThreeDstore')

@observer

class CalendarItem extends Component{
    
   

    render(){
       let planet=this.props.planet
        return (
            <div className='calendaritem'>
            <div > {this.props.ThreeDstore.currentPercent[planet]}%</div>
          <div>days</div>
          <div>years</div>

       </div>
           )

    }

}

export default CalendarItem