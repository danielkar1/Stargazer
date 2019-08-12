import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';

class UserStore{
    @observable login=false;
    @observable loginpopup=false;
    @observable userName=''

    @action ActivatePopup=()=>{
        if(this.loginpopup){
            this.loginpopup=false;
            console.log("got here1")
        }else{
            this.loginpopup=true;
        }
    }
}

export default new UserStore