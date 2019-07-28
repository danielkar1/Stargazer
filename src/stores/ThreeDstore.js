import { observer, inject } from 'mobx-react';

import { action, observable, computed } from 'mobx';


class ThreeDstore {

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
@observable totalCurrentPercent = 0;
@observable currentPercent=0;
@observable test=1;
@observable result=document.getElementById("animProg")
@action showPercent(){
  let setimer=()=>{
  
  //  this.result=document.getElementById("animProg")
  console.log("first showpr")
  if(this.currentPercent < 100){
   
    // console.log(this.currentPercent)
    this.currentPercent += 1;
    console.log(this.currentPercent)
   }
   else {
    this.currentPercent = 0;
   }
   
  }
  setInterval(() => {
    setimer()
  }, 1500);
  // document.getElementById("animProg").innerText=this.currentPercent;
}
// @action showPercent(){
//   console.log("first showpr")
//   if(this.currentPercent < 100){
    
//      // console.log(this.currentPercent)
//      this.currentPercent += 1;
//      console.log(this.currentPercent)
//     }
//     else {
//      this.currentPercent = 0;
//     }
//     this.result.getElementById("animProg").innerText=this.currentPercent;
// }
  @action updatePosition(id) {
    var position = this.getPosition(id);

    alert("The image is located at: " + position.x + ", " + position.y);
  }
  // @action showPercent(currentPercent){
  //   let result=document.getElementById("animProg")
  //   console.log(result)
  //   let currentPercent1=currentPercent
  //   let showPercent = window.setInterval(function() {
  //        console.log("first showpr")
  //         if(currentPercent < 100)
  //         {
  //           currentPercent += 1;
  //         }
  //         else {
  //          currentPercent = 0;
  //         }
  //        console.log(currentPercent);
  //       }, 150);
  // }
  // @action findKeyframesRule(rule) {

  //   var ss = document.styleSheets;
  //   console.log(ss)
  //   for (var i = 0; i < ss.length; ++i) {
  //     for (var j = 0; j < ss[i].cssRules.length; ++j) {
  //       console.log(ss[i].cssRules[j].name)
  //       if (ss[i].cssRules[j].name == rule) {
  //         console.log(ss[i].cssRules[j])
  //         return ss[i].cssRules[j];
  //       }
  //     }
  //   }
  //   return null;
  // }

//   @action change(anim) {
//   let result=document.getElementById("animProg")
//   //  let totalCurrentPercent = 0;
//   //  let currentPercent = 0;
//   //  this.showPercent(totalCurrentPercent,currentPercent)
//   //  let showPercent = window.setInterval(function() {
//   //    console.log("first showpr")
//   //     if(currentPercent < 100)
//   //     {
//   //       currentPercent += 1;
//   //     }
//   //     else {
//   //      currentPercent = 0;
//   //     }
//   //    result.innerHTML=currentPercent;
//   //   }, 150);
  
//     var keyframes = this.findKeyframesRule(anim),
//       length = keyframes.cssRules.length;
//     console.log(length)
//     var keyframeString = [];
//     for (var i = 0; i < length; i++) {
//       keyframeString.push(keyframes[i].keyText);
//     }
//     var keys = keyframeString.map(function (str) {
//       return str.replace('%', '');
//     });
//     console.log(keys)

//     this.totalCurrentPercent += this.currentPercent;
//     if(this.totalCurrentPercent > 100)
//     {
//       this.totalCurrentPercent -= 100;
//     }
//     this.currentPercent = 0;
//     let showPercent =setInterval(function() {
//       console.log("second showpr")
//       if(currentPercent < 100)
//       {
//        currentPercent += 1;
//       }
//       else {
//        currentPercent = 0;
//       }
//       result.innerHTML=currentPercent;
//     }, 150); 
//     let closest = getClosest(keys);
//     var position = keys.indexOf(closest);
//     console.log(position)
//     let firstPercent = keys[position];

// // Removes the current rules of the specified 
// // animation
// // for(var i = 0, j = keyframeString.length; i < j; i ++)
// // {
// //   keyframes.deleteRule(keyframeString[i]);
// // }
// let multiplier=firstPercent
// // keyframes.appendRule("0%{  })
//     // keyframes.appendRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 0) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 0) + "deg); background-color:red; }");
//     // keyframes.appendRule("13% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 45) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 45) + "deg); }");
//     // keyframes.appendRule("25% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 90) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 90) + "deg); }");
//     // keyframes.appendRule("38% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 135) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 135) + "deg); }");
//     // keyframes.appendRule("50% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 180) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 180) + "deg); }");
//     // keyframes.appendRule("63% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 225) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 225) + "deg); }");
//     // keyframes.appendRule("75% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 270) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 270) + "deg); }");
//     // keyframes.appendRule("88% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 315) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 315) + "deg); }");
//     // keyframes.appendRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 360) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 360) + "deg); }");
//     window.clearInterval(showPercent);
  
  
  
//     function getClosest(keyframe) {
//       var curr = keyframe[0];
//       console.log(curr)
//       var diff = Math.abs (totalCurrentPercent - curr);
//       for (var val = 0, j = keyframe.length; val < j; val++) {
//         var newdiff = Math.abs(totalCurrentPercent - keyframe[val]);
//         if (newdiff < diff) {
//           diff = newdiff;
//           curr = keyframe[val];
//           console.log(curr)
//          }
//       }
//       return curr;
//     }
//   }

@action Get(currentPercent){

  console.log(currentPercent)
  console.log(this.currentPercent)
  function findKeyframesRule(rule) {
    var ss = document.styleSheets;
    for (var i = 0; i < ss.length; ++i) {
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
            if ( ss[i].cssRules[j].name == rule) { return ss[i].cssRules[j]; }
        }
    }
    return null;
}

let change=(anim)=> {
  // Obtains the animation object of the specified
  // animation
  var keyframes = findKeyframesRule(anim),
      length = keyframes.cssRules.length;
  
  // Makes an array of the current percent values
  // in the animation
  var keyframeString = [];  
  for(var i = 0; i < length; i ++)
  {
    keyframeString.push(keyframes[i].keyText);
  }
  
    
  // Removes all the % values from the array so
  // the getClosest function can perform calculations
  var keys = keyframeString.map(function(str) {
    return str.replace('%', '');
  });
  
  // Updates the current position of the circle to
  // be used in the calculations
  this.totalCurrentPercent += this.currentPercent;
  if(this.totalCurrentPercent > 100)
  {
    this.totalCurrentPercent -= 100;
  }
  // Self explanatory variables if you read the
  // description of getClosest
  var closest = getClosest(keys);
  
  var position = keys.indexOf(closest), 
      firstPercent = keys[position];
  
  // Removes the current rules of the specified 
  // animation
  for(var i = 0, j = keyframeString.length; i < j; i ++)
  {
    keyframes.deleteRule(keyframeString[i]);
  }
  
  // Turns the percent when activated into the
  // corresponding degree of a circle
  var multiplier = firstPercent * 3.6;
  
   keyframes.appendRule("0% { box-shadow: inset -40px 0 2px rgba(0, 0, 0, 0.5);");
  
  keyframes.appendRule("25% {  box-shadow: inset 0 100 1px rgba(0, 0, 0, 0.5);");
  
  keyframes.appendRule("50% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5);");

  keyframes.appendRule("75% { box-shadow: inset 24px -20px 15px rgba(0, 0, 0, 0.5);}");
  keyframes.appendRule("75.01%{box-shadow: inset -24px -20px 15px rgba(0, 0, 0, 0.5);}");
  keyframes.appendRule("100% box-shadow: inset -4px 0 2px rgba(0, 0, 0, 0.5);}");
  
  // Shows the circle again
  // circle.style.display = "inherit";
  // Sets the animation to the newly specified rules 
  // circle.style.webkitAnimationName = anim; 
  
  // Resets the approximate animation percent counter
  window.clearInterval(this.showPercent);
  this.currentPercent = 0;
  this.showPercent = ()=> {
    let setimer=()=>{
    if(this.currentPercent < 100)
    {
      this.currentPercent += 1;
    }
    else {
      this.currentPercent = 0;
    }  
  }
  setInterval(() => {
    setimer()
  }, 150);
}

}

// Attatches the change function to the button's
// onclick function
// button.onclick = function() {
//   // Removes the animation so a new one can be set
//   circle.style.webkitAnimationName = "none";
//   // Temporarily hides the circle
//   circle.style.display = "none";
  // Initializes change function
  setTimeout(function () { 
      change("shadow-uranus"); 
  }, 0);
// }

let getClosest=(keyframe)=> {
  var curr = keyframe[0];
  var diff = Math.abs (this.totalCurrentPercent - curr);
  for (var val = 0, j = keyframe.length; val < j; val++) {
    var newdiff = Math.abs(this.totalCurrentPercent - keyframe[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = keyframe[val];
     }
  }
  return curr;
}


// Check out https://zachsaucier.com/ for more of my projects
 
  

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
      // console.log(x, y)
      // let r = 'shadow-uranus'
      // this.change(r);
      // this.stylesheet(id)
     
    }
    return console.log("The image is located at: " + x + ", " + y);
  }

}










export default new ThreeDstore()