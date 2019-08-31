import { observer, inject } from 'mobx-react';

import { action, observable, computed, set } from 'mobx';


class ThreeDstore {

 
  @observable totalCurrentPercent = {  'mercury': 0, 'mars': 0, 'uranus': 0, 'earth': 0 };
  @observable yearCounter= { 'mercury': 0, 'mars': 0, 'uranus': 0, 'earth': 0 };
  @observable currentPercent = { 'sun': 1, 'mercury': 1, 'mars': 1, 'uranus': 1, 'earth': 1 }
  @observable test = 1;
  @observable animationDuration={  'mercury': 1, 'mars': 1, 'uranus': 1, 'earth': 1 }

  @action getAnimeDuration=(id)=>{
    let animationDuration=this.GetCssAtri(id).animationDuration
    animationDuration=animationDuration.replace('s','0')
    this.animationDuration[id]=parseInt(animationDuration)
    
    return this.animationDuration[id]
  }

  @action showPercent(id) {
        let totalDuration = this.getAnimeDuration(id)
        let setimer = (id) => {
          if (this.currentPercent[id] < 100) {
            this.currentPercent[id] += 1;        
          }
          else {
            this.yearCounter[id]+=1
            this.currentPercent[id] = 0;
          }
         
        }
    return setInterval(() => {
    setimer(id)},  totalDuration);
       
      }

  @action GetCssAtri(id){
      console.log(id)
      let idStyle=document.querySelector(`#${id}`)
      let style = getComputedStyle(idStyle)
      return style
  }



  @action Get(id) {

    //  this.getAnimeDuration(id)
    function findKeyframesRule(rule) {
      let ss = document.styleSheets;
      for (let i = 1; i < ss.length; ++i) {
        for (let j = 0; j < ss[i].cssRules.length; ++j) {
          if (ss[i].cssRules[j].name == rule) { return ss[i].cssRules[j]; }
        }
      }
      return null;
    }

    let change = (anim) => {
  
      var keyframes = findKeyframesRule(anim),
        length = keyframes.cssRules.length;

      var keyframeString = [];
      for (var i = 0; i < length; i++) {
        keyframeString.push(keyframes[i].keyText);
      }

      var keys = keyframeString.map(function (str) {
        return str.replace('%', '');
      });

      this.totalCurrentPercent[id] += this.currentPercent[id];
      if (this.totalCurrentPercent[id] > 100) {
        this.totalCurrentPercent[id] -= 100;
      }  
      var closest = getClosest(keys);

      var position = keys.indexOf(closest),
        firstPercent = keys[position];
      for (var i = 0, j = keyframeString.length; i < j; i++) {
        keyframes.deleteRule(keyframeString[i]);
      }
     

      // Turns the percent when activated into the
      // corresponding degree of a circle
      var multiplier = firstPercent * 3.6;

      keyframes.appendRule("0% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5)");

      keyframes.appendRule("25% {  box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5)");

      keyframes.appendRule("50% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5);");

      keyframes.appendRule("75% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5);}");
      keyframes.appendRule("75.01% {box-shadow: inset -24px -20px 15px rgba(0, 0, 0, 0.5);}");
      keyframes.appendRule("100% {box-shadow: inset -4px 0 2px rgba(0, 0, 0, 0.5);}");
    }
      // Resets the approximate animation percent counter
      
      ;
    
      this.currentPercent[id]=1;
 
    setTimeout(function () {
     
      change('shadow-uranus')
    }, 11);
    
    let getClosest = (keyframe) => {
      var curr = keyframe[0];
      var diff = Math.abs(this.totalCurrentPercent[id] - curr);
      for (var val = 0, j = keyframe.length; val < j; val++) {
        var newdiff = Math.abs(this.totalCurrentPercent[id] - keyframe[val]);
        if (newdiff < diff) {
          diff = newdiff;
          curr = keyframe[val];
        }
      }
      console.log(curr)
      return curr;
    }

  
}

  @action getPosition(id) {
    console.log(this.currentPercent)
    this.Get();
    console.log("bama")
    var el = document.getElementById(id);
    console.log(el)
    let rect, x = 0, y = 0;
    if (el) {
      rect = el.getBoundingClientRect();
      x = rect.left + window.scrollX;
      y = rect.top + window.scrollY;
    }
    return console.log("The image is located at: " + x + ", " + y);
  }

   //   @action stylesheet(id) {
  //     console.log(id)
  //     var style = document.createElement('style');
  //     style.type = 'text/css';
  //     var keyFrames = '\
  //     @keyframes spin {\
  //     100% {\
  //       background-position: A_DYNAMIC_VALUE;\
  //     }\
  // }';
  //     style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "100%");
  //    document.getElementById('sun').appendChild(style);
  //   }

}


export default new ThreeDstore()