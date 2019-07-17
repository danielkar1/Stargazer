import React, { Component } from 'react';
import Planets from './Planets'
import SolarSystem from './SolarSystem';
import ContentContainer from './ContentContainer'
import Navbar from './Navbar'

class Universe extends Component {

    render() {
        return <div id="universe">
            <Navbar/>
              
            <SolarSystem />
        </div>

    }

}

export default Universe;