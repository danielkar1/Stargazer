import React, { Component } from 'react';
import Planets from './Planets'
import SolarSystem from './SolarSystem';
import ContentContainer from './ContentContainer'


class Universe extends Component {

    render() {
        return <div id="universe">
              <ContentContainer/>
            <SolarSystem />
        </div>

    }

}

export default Universe;