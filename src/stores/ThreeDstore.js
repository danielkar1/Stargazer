import { observer, inject } from 'mobx-react';

import { action, observable } from 'mobx';


class ThreeDstore {
    
    
    
    @action  updatePosition(id) {
     var position = this.getPosition(id);
     
    //  alert("The image is located at: " + position.x + ", " + position.y);
     }

//      @action getPosition(el) {
//         // console.log(id)
//         var el=document.getElementById(el);
//         console.log(el)
//         let rect,X=0,Y=0;
//         if (el) {
//         rect=el.getBoundingClientRect();
//         X = rect.left + window.scrollX;
//         Y = rect.top + window.scrollY;
//         }
//         return alert("The image is located at: " + X + ", " +  Y);
//         }

}

export default new ThreeDstore()