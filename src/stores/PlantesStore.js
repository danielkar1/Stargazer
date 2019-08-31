import { action, observable } from 'mobx';
import UserStore from './UserStore'



class PlanetsStore {
  @observable PlanetMode = 'planet';
  @observable Planets = { 'sun': 'orbit', 'mercury': 'orbit', 'mars': 'orbit', 'uranus': `orbit`, 'earth': `orbit` }
  @observable CurrentPlanetClicked = '';
  @observable planetsKeyArr = [];
  @observable planetsValueArr = [];

  @action planetPop = (e) => {
   
// if(UserStore.logincompleted==true){
    if (this.Planets[e] === 'orbit' ){
      this.Planets[this.CurrentPlanetClicked]='orbit'
      this.Planets[e] = 'planetbig';

    } else {
      setTimeout(() => {
        document.getElementById(e).firstChild.classList.remove('pos')
        setTimeout(() => {
          document.getElementById(e).firstChild.classList.add('pos')
        }, 10);
        this.Planets[e] = 'orbit'
      }, 40);
    }
    this.CurrentPlanetClicked = e;

  // }
}
  @action contentcontainer = (e) => {
    document.getElementById(e).style.animation = "popup 4s "
  }

  //   @action PlanetsRest =()=> {
  //   Object.keys(this.Planets).forEach(key=> {this.Planets[key] = "orbit" });
  //   console.log("reset planets")
  //   return this.Planets;
  // }
  

  @action getArray = () => {

    for (let [key, value] of Object.entries(this.Planets)) {

      this.planetsKeyArr.push(key)
      this.planetsValueArr.push(value)

    }
  }
}

export default new PlanetsStore()

