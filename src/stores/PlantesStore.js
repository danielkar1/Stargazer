import { action, observable } from 'mobx';
import UserStore from './UserStore'
import ThreeDstore from './ThreeDstore'
import gameStore from './gameStore'


class PlanetsStore {
  
  @observable PlanetMode = 'planet';
  @observable Planets =new Object({
        
        sun: {
            classs: 'orbit',
            position: 0,
        },
        earth: {
          classs: 'planetbig',
          position: 3,
      },
      mercury: {
        classs: 'planetbig',
        position: 1,
    },
    venus: {
      classs: 'planetbig',
      position: 2,
  },
    mars: {
    classs: 'planetbig',
    position: 4,
},
    })
  @observable CurrentPlanetClicked = '';
  @observable planetsKeyArr = [];
  @observable planetsValueArr = [];

  @action ChangePlanetClass=(e)=>{

    setTimeout(() => {
      document.getElementById(e).firstChild.classList.remove('pos')
    
      setTimeout(() => {
        
        document.getElementById(e).firstChild.classList.add('pos')
      }, 10);
    }, 40);
    this.Planets[e].classs = 'planetbig'
  }
  @action planetPop = (e) => {
    if (this.Planets[e].classs === 'orbit'){
      this.Planets[e].classs = 'planetbig';
      this.Planets[this.CurrentPlanetClicked].classs='orbit'
         
    } else {
      setTimeout(() => {
        document.getElementById(e).firstChild.classList.remove('pos')
      
        setTimeout(() => {
          
          document.getElementById(e).firstChild.classList.add('pos')
        }, 10);
      }, 40);
      this.Planets[e].classs = 'orbit'
     
    } 
  
    this.CurrentPlanetClicked = e;
    gameStore.winGame(this.CurrentPlanetClicked)


}
  //   @action PlanetsRest =()=> {
  //   Object.keys(this.Planets).forEach(key=> {this.Planets[key] = "orbit" });
  //   console.log("reset planets")
  //   return this.Planets;
  // }
  @action getArray = () => {

    for (let [key, value] of Object.entries(this.Planets)) {
      console.log(key)
      this.planetsKeyArr.push(key)
      this.planetsValueArr.push(value)

    }
  }
}

let planetStore=new PlanetsStore()
export default planetStore;

