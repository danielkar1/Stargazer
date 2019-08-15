import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './../LoginContainer.css';
import User from './User';

@inject('PlanetsStore')
@inject('UserStore')
@observer

class LoginContainer extends Component{
    openModul=()=>{
        // this.props.UserStore.login=true;
        this.props.UserStore.ActivatePopup() 
    
    }
    

    render(){
        let UserName=this.props.UserStore.userName
        console.log(UserName)
        let UserLastName=this.props.UserStore.userLastName
        let Planet=this.props.UserStore.userPlanet
        return(
            <div  className='LoginContainer' >
            <input id="Button1" type="button" value={this.props.PlanetsStore.CurrentPlanetClicked} /> 
           <div className="welcome">{this.props.UserStore.logincompleted?` Hello ${UserName} ${UserLastName} from ${Planet}`: "WELCOME TO STARGAZER"}</div>
           
            <User/>
            
            </div>
        )

    }

}

export default LoginContainer;