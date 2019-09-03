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
                <span>{planet}</span>
         <div>{this.props.ThreeDstore.dayCounter[planet]} Days</div>
          <div>{this.props.ThreeDstore.yearCounter[planet]} Years</div>
          

       </div>
           )

    }

}

export default CalendarItem