import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';
import PlantesStore from './PlantesStore';

inject('PlanetStore')
class UserStore{
    @observable loginpopup=false;
    @observable logincompleted=false;
    @observable userName=''
    @observable userLastName=''
    @observable userPlanet=''



    @action ActivatePopup=()=>{
    
        // if(this.loginpopup){
        //     if(this.userName!==''&&this.userLastName!==''&& this.userPlanet!==''){
        //     this.loginpopup=false;
        //     this.logincompleted=true                
        // }else{
        //         alert("something missing, please surrender to the system")
        //     }         
        // }else{
            this.loginpopup=true;
            // PlantesStore.Planets[PlantesStore.CurrentPlanetClicked]='orbit'
        // }
    
    }

    @action closepopup=()=>{
        this.loginpopup=false
    }
    
}

export default new UserStore