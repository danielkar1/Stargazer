import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class ThreeDstore {

  
  @action updatePosition(id) {
    var position = this.getPosition(id);
    
    alert("The image is located at: " + position.x + ", " + position.y);
  }
        @action findKeyframesRule(rule) {
          var ss = document.styleSheets;
          console.log(ss)
         for (var i = 0; i < ss.length; ++i) {
           for (var j = 0; j < ss[i].cssRules.length; ++j) {
            console.log(ss[i].cssRules[j].type)
             if (ss[i].cssRules[j].type !== window.CSSRule.WEBKIT_KEYFRAMES_RULE &&
               ss[i].cssRules[j].name == rule) {
               return console.log(ss[i].cssRules[j]);
            }
          }
        }
        return null;
      }

  @action getPosition(el) {
    // console.log(id)
    var el = document.getElementById(el);
    console.log(el)
    let rect, x = 0, y = 0;
    if (el) {
      rect = el.getBoundingClientRect();
      x = rect.left + window.scrollX;
      y = rect.top + window.scrollY;
      // console.log(x, y)
      let r='shadow-uranus'
      this.findKeyframesRule(r)
    }
    return console.log("The image is located at: " + x + ", " + y);
  }



}





export default new ThreeDstore()