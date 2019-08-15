import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';

inject(PlanetStore);
class PlanetStore {
 @observable planetInfo={}

 @action insertInfo=(e)=>{
     this.planetInfo[name]= ${this.props.PlanetStore[e]}
     this.planetInfo[type]= "Gasplanet"

 }

 

}

export default new PlanetStore;