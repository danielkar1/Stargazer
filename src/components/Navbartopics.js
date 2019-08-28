import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../LoginContainer.css';
import ThreeDstore from '../stores/ThreeDstore';
@inject('PlanetsStore','ThreeDstore')
@observer

class Navbartopics extends Component {

    onClick = (e) => {
        let planetClicked = e.currentTarget.innerText;
        this.props.PlanetsStore.planetPop(planetClicked)
    }


    render() {
        let planetName=this.props.topic
        return (
        
            <div className="topic" type="button" onClick={this.onClick}>{planetName}</div>
    
        )}
}

export default Navbartopics;