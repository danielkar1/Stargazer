import { action, observable } from 'mobx';
import UserStore from './UserStore'
import ThreeDstore from './ThreeDstore'


class PlanetsStore {
  @observable PlanetMode = 'planet';
  @observable Planets = { 'sun': 'orbit', 'mercury': 'planetbig', 'mars': 'planetbig', 'venus': `planetbig`, 'earth': `planetbig` }
  @observable CurrentPlanetClicked = '';
  @observable planetsKeyArr = [];
  @observable planetsValueArr = [];

  @action planetPop = (e) => {
   
    //  ThreeDstore.AnimationChange
    // if(this.CurrentPlanetClicked=="sun"){
    //   ThreeDstore.Get("dd")
    // }
    
    if (this.Planets[e] === 'orbit'){
      this.Planets[this.CurrentPlanetClicked]='orbit'
      this.Planets[e] = 'planetbig';
         
    } else {
      setTimeout(() => {
        document.getElementById(e).firstChild.classList.remove('pos')
      
        setTimeout(() => {
          
          document.getElementById(e).firstChild.classList.add('pos')
        }, 10);
      }, 40);
      this.Planets[e] = 'orbit'
    } 
  
    this.CurrentPlanetClicked = e;

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

let planetStore=new PlanetsStore()
export default planetStore;

