import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './../ContentContainer.css';
@inject('PlanetsStore')
@observer

class Navbartopics extends Component{

onClick=(e)=>{
    console.log(e.target.value)
    this.props.PlanetsStore.Popup(e.target.text)
}


    render(){
        console.log(this.props.topics)
        return(
            <div className="topic" onClick={this.onClick}>{this.props.topic}</div>
        )

    }


}

export default Navbartopics;