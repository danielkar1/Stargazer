import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './../LoginContainer.css';
import User from './User';

@inject('PlanetsStore')
@inject('UserStore')
@observer

class LoginContainer extends Component{
    // openModul=()=>{
    //     // this.props.UserStore.login=true;
    //     this.props.UserStore.ActivatePopup() 
    
    // }
    

    render(){
        let UserName=this.props.UserStore.userName
        let UserLastName=this.props.UserStore.userLastName
        let Planet=this.props.UserStore.userPlanet
        return(
            <div  className='LoginContainer' >
            <input id="currentPlanet" type="button" value={this.props.UserStore.logincompleted?this.props.PlanetsStore.CurrentPlanetClicked:"Please login"} /> 
           <div className="welcome">{this.props.UserStore.logincompleted?` Hello ${UserName} ${UserLastName} from ${Planet}`: "welcome to stargazer"}</div>
           <button id="loginpopup" onClick={this.props.UserStore.ActivatePopup} >Login</button>
            
            </div>
        )

    }

}

export default LoginContainer;