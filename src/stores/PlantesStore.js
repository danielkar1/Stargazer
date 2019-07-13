import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class PlanetsStore {
  @observable PlanetMode = 'planet';
  @observable Planets = { 'sun': 'orbit','uranus': `orbit`, 'earth': `orbit` }
  @observable CurrentPlanetClicked = ''

  @action Popup = (e) => {
    this.CurrentPlanetClicked = e;
    console.log(e)
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
}

export default new PlanetsStore()

