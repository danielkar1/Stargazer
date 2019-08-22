import { observer, inject } from 'mobx-react';

import { action, observable, computed } from 'mobx';


class ThreeDstore {

 
  @observable totalCurrentPercent = { 'sun': 1, 'mercury': 1, 'mars': 1, 'uranus': 1, 'earth': 1 };
  @observable currentPercent = { 'sun': 1, 'mercury': 1, 'mars': 1, 'uranus': 1, 'earth': 1 }
  @observable test = 1;
  @observable result = document.getElementById("animProg")
  @observable animationDuration={ 'sun': 1, 'mercury': 1, 'mars': 1, 'uranus': 1, 'earth': 1 }
  @observable showprecent=0
  @action showPercent(id) {
    // let setimer = () => {
    //   if (this.currentPercent[id] <= 100) {
    //     setTimeout(()=>{this.currentPercent[id] += 1;
    //       setimer();
    //       // this.result.innerText = this.currentPercent
    //     },this.animationDuration[id])
    //   }
    //   else {
    //     this.currentPercent[id] = 0;
    //     setimer()
    //   }

    // }
  //   console.log(this.currentPercent[id])
     
  //     let setimer = (id) => {
  //       console.log(id)
  //     if (this.currentPercent[id] <= 100) {
  //     this.currentPercent[id] += 1;
  //         // this.result.innerText = this.currentPercent
  //     }
  //     else {
  //       this.currentPercent[id] = 0;
       
  //     }
  //   }
  //   let test=setInterval(function() { setimer(1500)}, this.animationDuration[id])
     
  //    console.log("dd")
        let setimer = (id) => {
          if (this.currentPercent[id] < 100) {
            this.currentPercent[id] += 1;
            console.log(id)
          }
          else {
            this.currentPercent[id] = 0;
          }
          // this.result.innerHTML = this.currentPercent[id];
        }
        setInterval(() => {
          setimer(id)
        }, this.animationDuration[id]);
      }

  

  // @action updatePosition(id) {
  //   var position = this.getPosition(id);

  //   alert("The image is located at: " + position.x + ", " + position.y);
  // }

  @action GetCssAtri(id){
      console.log(id)
      let idStyle=document.querySelector(`#${id}`)
      let style = getComputedStyle(idStyle)
      return style
  }

  @action getAnimeDuration=(id)=>{
    let animationDuration=this.GetCssAtri(id).animationDuration
    animationDuration=animationDuration.replace('s','0')
    this.animationDuration[id]=parseInt(animationDuration)
  
  }

  @action Get(id) {

    this.getAnimeDuration(id)
     this.showPercent(id)
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

      // Removes the current rules of the specified 
      // animation
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

      // Shows the circle again
      // circle.style.display = "inherit";
      // Sets the animation to the newly specified rules 
      // circle.style.webkitAnimationName = anim; 

      // Resets the approximate animation percent counter
      
      window.clearInterval(this.showPercent);
      // setTimeout(this.showPercent, this.animationDuration[id]);

    //  this.currentPercent[id] = 1;
    //  let currentPercent=this.currentPercent[id]
    //  this.showPercent = setInterval(function() {
    //   if(this.currentPercent[id] < 100)
    //   {
    //     currentPercent[id] += 1;
    //   }
    //   else {
    //    currentPercent[id] = 1;
    //   }
    //   // result.innerHTML = currentPercent;
    // }, this.animationDuration[id]); 
    
    //   let showPercent = () => {
    //     let setimer = () => {
    //       if (this.currentPercent[id] < 100) {
    //         this.currentPercent[id] += 1;
    //       }
    //       else {
    //         this.currentPercent[id] = 0;
    //       }
    //     }
    //     setInterval(() => {
    //       setimer()
    //     }, this.animationDuration[id]);
    //   }
    //   showPercent()
    // }
  
    // Attatches the change function to the button's
    // onclick function
    // button.onclick = function() {
    //   // Removes the animation so a new one can be set
    //   circle.style.webkitAnimationName = "none";
    //   // Temporarily hides the circle
    //   circle.style.display = "none";
    // Initializes change function
    setTimeout(function () {
      // change(`#${id}.orbit`);
      change('shadow-uranus')
    }, 0);
    // }

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