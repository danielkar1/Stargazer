import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';

inject('PlanetStore')
class UserStore{
    @observable login=false;
    @observable loginpopup=false;
    @observable logincompleted=false;
    @observable userName=''
    @observable userLastName=''
    @observable userPlanet=''


    @action ActivatePopup=()=>{
        console.log(this.loginpopup)
        if(this.loginpopup){
            if(this.userName!=''&&this.userLastName!=''&& this.userPlanet!=''){
            this.loginpopup=false;
            this.logincompleted=true
                
        }else{
                alert("something missing, please surrender to the system")
            }
           
        }else{
            this.loginpopup=true;
        }
    console.log(this.loginpopup)
    }

    @action closepopup=()=>{
        this.loginpopup=false
    }
}

export default new UserStore