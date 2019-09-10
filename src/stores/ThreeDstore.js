import { observer, inject } from 'mobx-react';

import { action, observable, computed, set, autorun } from 'mobx';
import PlanetStore from "./PlantesStore"
import planetStore from './PlantesStore';

class ThreeDstore {

  @observable PlanetlDays={ 'sun': null, 'mercury': 88, 'mars':687, 'venus':225, 'earth': 364 } 
  @observable totalCurrentPercent = {  'mercury': 0, 'mars': 0, 'venus': 0, 'earth': 0 };
  @observable yearCounter= { 'mercury': 0, 'mars': 0, 'venus': 0, 'earth': 0 };
  @observable dayCounter= { 'mercury': 0, 'mars': 0, 'venus': 0, 'earth': 0 }
  @observable currentPercent = { 'sun': 0, 'mercury': 0, 'mars': 0, 'venus': 0, 'earth': 0 }
  // @observable sunClicked = false;
  @observable animationDuration={  'mercury': 1, 'mars': 1, 'venus': 1, 'earth': 1 }
  
 @computed get AnimatoinChange(){
       console.log(planetStore.Planets["sun"].classs)
        return this.Get("random")
 
}


  // @autorun(()=>{
  //   return console.log(PlanetStore.Planets["earth"])
  // })

  @action getAnimeDuration=(id)=>{
    let animationDuration=this.GetCssAtri(id).animationDuration
    animationDuration=animationDuration.replace('s','0')
    this.animationDuration[id]=parseInt(animationDuration)
    
    return this.animationDuration[id]
  }

  @action   showPercent(id) {
    
        let totalDuration = this.getAnimeDuration(id)
        let setimer = (id) => {
          if (this.currentPercent[id] < 100) {
            this.currentPercent[id] += 1;  
            this.dayCounter[id]=Math.round(this.currentPercent[id]*this.PlanetlDays[id]/100)
          }
          else {
            this.yearCounter[id]+=1
            this.currentPercent[id] = 1;
            this.dayCounter[id]=0;
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
    console.log(id)
    
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
  
     let keyframes = findKeyframesRule(anim),
        length = keyframes.cssRules.length;
      
    let keyframeString = [];
      for (var i = 0; i < length; i++) {
        keyframeString.push(keyframes[i].keyText);
      }

      var keys = keyframeString.map(function (str) {
        return str.replace('%', '');
      });

      this.totalCurrentPercent[id] += this.currentPercent[id];
      console.log(this.totalCurrentPercent[id])
      if (this.totalCurrentPercent[id] > 100) {
        this.totalCurrentPercent[id] -= 100;
      }  
      var closest = getClosest(keys);

      var position = keys.indexOf(closest),
        firstPercent = keys[position];
      for (var i = 0, j = keyframeString.length; i < j; i++) {
        keyframes.deleteRule(keyframeString[i]);
      }
     
      var multiplier =firstPercent*3.6;
if(planetStore.Planets["sun"].classs=="planetbig"){
  console.log(planetStore.Planets["sun"].classs)
      // keyframes.appendRule("0% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5)");
      keyframes.appendRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 0) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 0) + "deg);}");
  keyframes.appendRule("13% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 45) + "deg)  rotate(" + (multiplier + 45) + "deg); }");
  keyframes.appendRule("25% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 90) + "deg)  rotate(" + (multiplier + 90) + "deg); }");
  keyframes.appendRule("38% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 135) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 135) + "deg); }");
  keyframes.appendRule("50% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 180) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 180) + "deg); }");
  keyframes.appendRule("63% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 225) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 225) + "deg); }");
  keyframes.appendRule("75% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 270) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 270) + "deg); }");
  keyframes.appendRule("88% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 315) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 315) + "deg); }");
  keyframes.appendRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 360) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 360) + "deg); }");

}else{
  
 keyframes.appendRule("0% {box-shadow: inset -4px 0 2px rgba(0, 0, 0, 0.5)}")

 keyframes.appendRule("25% { box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5); }")

 keyframes.appendRule("50% {box-shadow: inset 4px 0 2px rgba(0, 0, 0, 0.5); }")

 keyframes.appendRule("75% {box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5); }")

 keyframes.appendRule("75.01% { box-shadow: inset -24px -20px 15px rgba(0, 0, 0, 0.5);}")
 keyframes.appendRule("100%{ box-shadow: inset -4px 0 2px rgba(0, 0, 0, 0.5);}")
}



    }
      
      ;
      // window.clearInterval(this.showPercent);
      // this.currentPercent[id]=1;
      // this.showPercent = setInterval((id)=> {
      //   console.log(id)
      //   if(this.currentPercent < 100)
      //   {
      //     this.currentPercent += 1;
      //   }
      //   else {
      //     this.currentPercent = 1;
      //   }
       
      // }, this.animationDuration[id]); 
  
      
 
    setTimeout(function () {
     
      change("shadow-uranus")
    }, 11);
    
    let getClosest = (keyframe) => {
      var curr = keyframe[0];
      var diff = Math.abs (this.totalCurrentPercent[id] - curr);
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

let animationStore=new ThreeDstore()
export default animationStore;