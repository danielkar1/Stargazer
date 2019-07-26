import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class ThreeDstore {

  @action stylesheet(id) {
    console.log(id)
    var style = document.createElement('style');
    style.type = 'text/css';
    var keyFrames = '\
    @keyframes spin {\
    100% {\
      background-position: A_DYNAMIC_VALUE;\
    }\
}';
    style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "100%");
   document.getElementById('sun').appendChild(style);
  }


  @action updatePosition(id) {
    var position = this.getPosition(id);

    alert("The image is located at: " + position.x + ", " + position.y);
  }
  @action findKeyframesRule(rule) {
    var ss = document.styleSheets[1].cssRules;
    console.log(ss)
    for (var i = 0; i < ss.length; ++i) {
      for (var j = 0; j < ss[i].cssRules.length; ++j) {
        console.log(ss[i].cssRules[j].name)
        if (ss[i].cssRules[j].name == rule) {
          return ss[i].cssRules[j];
        }
      }
    }
    return null;
  }

  @action change(anim) {
    // Obtains the animation object of the specified
    // animation
    var keyframes = this.findKeyframesRule(anim),
      length = keyframes.cssRules.length;
    console.log(length)
    // Makes an array of the current percent values
    // in the animation
    var keyframeString = [];
    for (var i = 0; i < length; i++) {
      keyframeString.push(keyframes[i].keyText);
    }
    var keys = keyframeString.map(function (str) {
      return str.replace('%', '');
    });
    console.log(keys)

let multiplier=3.6
    keyframes.appendRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 0) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 0) + "deg); background-color:red; }");
    keyframes.appendRule("13% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 45) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 45) + "deg); }");
    keyframes.appendRule("25% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 90) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 90) + "deg); }");
    keyframes.appendRule("38% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 135) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 135) + "deg); }");
    keyframes.appendRule("50% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 180) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 180) + "deg); }");
    keyframes.appendRule("63% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 225) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 225) + "deg); }");
    keyframes.appendRule("75% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 270) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 270) + "deg); }");
    keyframes.appendRule("88% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 315) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 315) + "deg); }");
    keyframes.appendRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 360) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 360) + "deg); }");
  }




  @action getPosition(id) {
    // console.log(id)
    var el = document.getElementById(id);
    console.log(el)
    let rect, x = 0, y = 0;
    if (el) {
      rect = el.getBoundingClientRect();
      x = rect.left + window.scrollX;
      y = rect.top + window.scrollY;
      // console.log(x, y)
      let r = 'shadow-uranus'
      this.change(r);
      // this.stylesheet(id)
    }
    return console.log("The image is located at: " + x + ", " + y);
  }

}










export default new ThreeDstore()