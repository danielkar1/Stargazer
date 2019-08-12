import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../LoginContainer.css';
@inject('PlanetsStore')
@inject('UserStore')
@observer


class User extends Component {

    openModul = () => {
        // this.props.UserStore.login=true;
        this.props.UserStore.ActivatePopup()


    }

    inputChange = (e) => {
        this.props.UserStore.userName = e.targer.value
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
                <input type="text" name="name" onChange={this.props.inputChange} placeholder="firstname"></input>
                <div>Surename</div>
                <input name="sureName" onChange={this.props.inputChange} placeholder="lastname" />
                <div>Country</div>
                <input name="Planet" onChange={this.props.inputChange} placeholder="country" />
                                  </div>
                <button id="Login" onClick={this.props.closePopup}>Login</button>

                    </div> : <div id="button" onClick={this.props.UserStore.ActivatePopup}>Login</div>}</div>

            )
        }
    }
}

export default User;