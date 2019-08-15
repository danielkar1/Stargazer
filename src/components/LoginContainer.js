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
        let isLoginCompleted=this.props.UserStore.logincompleted
        return(
            <div  className='LoginContainer' >
            <input id="currentPlanet" type="button" value={isLoginCompleted?this.props.PlanetsStore.CurrentPlanetClicked:"Please login"} /> 
           <div className="welcome">{isLoginCompleted?` Hello ${UserName} ${UserLastName} from ${Planet}`: "welcome to stargazer"}</div>
           <button id="loginpopup" onClick={isLoginCompleted?null:this.props.UserStore.ActivatePopup} >{isLoginCompleted? "Logged": "Login"}</button>
            
            </div>
        )

    }

}

export default LoginContainer;