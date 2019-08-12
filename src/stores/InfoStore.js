import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';

inject(PlanetStore);
class PlanetStore {
 @observable planetInfo={}

 @action insertInfo=(e)=>{
     this.planetInfo[name]= ${this.props.PlanetStore[e]}
     this.planetInfo[type]= "GasPlanet"

 }


}

export default new PlanetStore;