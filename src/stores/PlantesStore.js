import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class PlanetsStore {
  @observable PlanetMode = 'planet';
  @observable Planets = { 'sun':'orbit', 'mercury':'orbit','mars':'orbit','uranus': `orbit`, 'earth': `orbit` }
  @observable CurrentPlanetClicked = '';
  @observable planetsKeyArr = [];
  @observable planetsValueArr = [];

  @action Popup = (e) => {
    this.CurrentPlanetClicked = e;
    if (this.Planets[e] === 'orbit') {
      this.Planets[e] = 'planetbig';

    } else {
      setTimeout(() => {
        document.getElementById(e).firstChild.classList.remove('pos')
        setTimeout(() => {
          document.getElementById(e).firstChild.classList.add('pos')
        }, 10);
        this.Planets[e] = 'orbit'
      }, 40);
      // document.getElementById(e).childNodes[1].classList.removeAttribute(e)

    }
  }
  @action contentcontainer = (e) => {
    document.getElementById(e).style.animation = "popup 4s "
  }

  @action getArray = () => {

    for (let [key, value] of Object.entries(this.Planets)) {

      this.planetsKeyArr.push(key)
   
      this.planetsValueArr.push(value)
      console.log(value)


    }
  }
}

export default new PlanetsStore()

