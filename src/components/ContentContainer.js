import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './../ContentContainer.css';
@inject('PlanetsStore')
@inject('ThreeDstore')
@observer

class ContentContainer extends Component{


    render(){

        return(
            <div>
            <div  className='contentcontainer' >{this.props.PlanetsStore.CurrentPlanetClicked} is your planet</div>
            
            </div>

        )

    }


}

export default ContentContainer;