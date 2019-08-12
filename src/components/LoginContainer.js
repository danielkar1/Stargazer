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

        return(
            <div  className='LoginContainer' >
            <input id="Button1" type="button" value={this.props.PlanetsStore.CurrentPlanetClicked} />
            {this.props.PlanetsStore.CurrentPlanetClicked} is your planet
           
            <User/>
            
            </div>
        )

    }

}

export default LoginContainer;