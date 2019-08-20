import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../LoginContainer.css';
@inject('PlanetsStore')
@observer

class Navbartopics extends Component {

    onClick = (e) => {
        let planetClicked = e.currentTarget.innerText;
        this.props.PlanetsStore.planetPop(planetClicked)
    }


    render() {
        return (
            <div className="topic" type="button" onClick={this.onClick}>{this.props.topic}</div>
        )}
}

export default Navbartopics;