import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class ThreeDstore {

  @action stylesheet(id) {

    var style = document.createElement('style');
style.type = 'text/css';
var keyFrames = '\
@keyframes spin {\
    100% {\
       transform: rotate(A_DYNAMIC_VALUE);\
    }\
}\
@-moz-keyframes spinIt {\
    100% {\
        -webkit-transform: rotate(A_DYNAMIC_VALUE);\
    }\
}';
style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
document.getElementsByTagName('head')[0].appendChild(style);
  }


  @action updatePosition(id) {
    var position = this.getPosition(id);
    
    alert("The image is located at: " + position.x + ", " + position.y);
  }
        @action findKeyframesRule(rule) {
          var ss = document.styleSheets;
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
        for(var i = 0; i < length; i ++) {
          keyframeString.push(keyframes[i].keyText);
        }
        var keys = keyframeString.map(function(str) {
          return str.replace('%', '');
        });
        console.log(keys)
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
      this.change(r);
      var sheet = (function() {
        // Create the <style> tag
        var style = document.createElement("style");
      
        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")
      
        // WebKit hack :(
        style.appendChild(document.createTextNode(""));
      
        // Add the <style> element to the page
        document.head.appendChild(style);
      
        return style.sheet;
      })();
      sheet.insertRule("div { float: left; opacity: 0.8; }", 0)
      // sheet.insertRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (0) + "deg) translate(-100px,-100px) rotate(" + ( 0) + "deg); background-color:red; }",1);
    //   CSSKeyframe.keyText("13% { -webkit-transform: translate(100px,100px) rotate(" + ( 45) + "deg) translate(-100px,-100px) rotate(" + ( 45) + "deg); }");
    //   CSSKeyframe.keyText("25% { -webkit-transform: translate(100px,100px) rotate(" + ( 90) + "deg) translate(-100px,-100px) rotate(" + ( 90) + "deg); }");
    //   CSSKeyframe.keyText("38% { -webkit-transform: translate(100px,100px) rotate(" + (135) + "deg) translate(-100px,-100px) rotate(" + ( 135) + "deg); }");
    //     keyframes.insertRule("50% { -webkit-transform: translate(100px,100px) rotate(" + ( 180) + "deg) translate(-100px,-100px) rotate(" + ( 180) + "deg); }");
    //     keyframes.insertRule("63% { -webkit-transform: translate(100px,100px) rotate(" + ( 225) + "deg) translate(-100px,-100px) rotate(" + (225) + "deg); }");
    //     keyframes.insertRule("75% { -webkit-transform: translate(100px,100px) rotate(" + ( 270) + "deg) translate(-100px,-100px) rotate(" + (270) + "deg); }");
    //     keyframes.insertRule("88% { -webkit-transform: translate(100px,100px) rotate(" + ( 315) + "deg) translate(-100px,-100px) rotate(" + ( 315) + "deg); }");
    //     keyframes.insertRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (360) + "deg) translate(-100px,-100px) rotate(" + ( 360) + "deg); }");
     }
    return console.log("The image is located at: " + x + ", " + y);
  }

}










export default new ThreeDstore()