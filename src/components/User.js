import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../LoginContainer.css';
@inject('PlanetsStore')
@inject('UserStore')
@observer


class User extends Component {

    inputChange = (e) => {
        this.props.UserStore[e.target.name] = e.target.value
       
        console.log(this.props.UserStore.userName)

    }

    render() {
        if (this.props.UserStore.login) {
            return (
                <div>
                    <span>name from user store</span>
                    <span>last name from user store</span>
                </div>
            )
        } else {
            return (

       <div>{this.props.UserStore.loginpopup ?
           <div id="popup">
           <button id="closePopupButton" onClick={this.props.UserStore.ActivatePopup}>x</button>
                <div className="popupInput">
                <div>Name</div>
                <input type="text" name="userName" onChange={this.inputChange} placeholder="firstname"></input>
                <div>Surename</div>
                <input name="userLastName" onChange={this.inputChange} placeholder="surename" />
                <div>Planet</div>
                <input name="userPlanet" onChange={this.inputChange} placeholder="Planet" />
                                  </div>
                <button id="Login" onClick={this.props.UserStore.ActivatePopup}>Login</button>

                    </div> : <div id="loginbutton" onClick={this.props.UserStore.ActivatePopup}>Login</div>}</div>

            )
        }
    }
}

export default User;