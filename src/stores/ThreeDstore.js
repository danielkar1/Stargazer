import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class ThreeDstore {
    
    
    @action getPosition1(id) {
        console.log(id)
        var el=document.getElementsByClassName('pos')[4];
        console.log(el)
        var xPos = 0;
        var yPos = 0;
        
        while (el) {
            if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
            
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
          } else {
              // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }
          console.log(xPos)
          console.log(yPos)
          el = el.offsetParent;
        }
        return {
            x: xPos,
          y: yPos
        };
      
       
        window.addEventListener("scroll", this.updatePosition, false);
      window.addEventListener("resize", this.updatePosition, false);
    }
      
    
    @action  updatePosition(id) {
     var position = this.getPosition(id);
     
     alert("The image is located at: " + position.x + ", " + position.y);
     }

     @action getPosition(el) {
        // console.log(id)
        var el=document.getElementById(el);
        console.log(el)
        let rect,X=0,Y=0;
        if (el) {
        rect=el.getBoundingClientRect();
        X = rect.left + window.scrollX;
        Y = rect.top + window.scrollY;
        }
        return alert("The image is located at: " + X + ", " +  Y);
        }

}

export default new ThreeDstore()