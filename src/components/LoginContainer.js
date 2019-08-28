import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './../LoginContainer.css';
import User from './User';

@inject('PlanetsStore')
@inject('UserStore')
@observer

class LoginContainer extends Component {
    // openModul=()=>{
    //     // this.props.UserStore.login=true;
    //     this.props.UserStore.ActivatePopup() 

    // }


    render() {
        let UserName = this.props.UserStore.userName
        let UserLastName = this.props.UserStore.userLastName
        let Planet = this.props.UserStore.userPlanet
        let isLoginCompleted = this.props.UserStore.logincompleted
        return (
            <div id='LoginContainer' >
                <p>
                    Welcome to The solar-system calander
              <span>
                        here you can see in real-time
                       the passage of days and years in each planet in our solar-system.
                       and the planets info.
             </span>
                    &mdash; please press the SUN to begin &mdash;
</p>
                <div id="enter">
                    <div id="sun" className="orbit" onClick={this.props.UserStore.ActivatePopup} >
                        <div className='planet' id="sun" >
                        </div>
                    </div>
                </div>

            </div>
        )

    }

}

export default LoginContainer;