import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../ContentContainer.css';
import Navbartopics from './Navbartopics'
@inject('PlanetsStore')
@observer

class Navbar extends Component {

  render() {

    var planets = this.props.PlanetsStore.planetsKeyArr;
    return (
      <div className='navbar'> {planets.map((planet, index) => <Navbartopics topic={planet} />)} </div>
    )

  }



}

export default Navbar;