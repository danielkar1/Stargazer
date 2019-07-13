import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './../ContentContainer.css';
@inject('PlanetsStore')
@observer

class ContentContainer extends Component{


    render(){

        return(
            <div  className='contentcontainer' >{this.props.PlanetsStore.CurrentPlanetClicked} is your planet</div>
        )

    }


}

export default ContentContainer;