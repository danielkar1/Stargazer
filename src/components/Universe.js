import React, { Component } from 'react';
import Planets from './Planets'
import SolarSystem from './SolarSystem';
import ContentContainer from './ContentContainer'
import Navbar from './Navbar'
import {observer, inject} from 'mobx-react';

@inject('PlanetsStore', 'ThreeDstore')
@observer
class Universe extends Component {

    render() {
        return <div id="universe">
            <Navbar/>
// }
            <div id="animProg">{this.props.ThreeDstore.showPercent()}</div>
            <SolarSystem />
        </div>

    }

}

export default Universe;