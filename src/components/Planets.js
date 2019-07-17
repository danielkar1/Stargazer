import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlantesStore from '../stores/PlantesStore';
import Planet from './Planet';
import ContentContainer from './ContentContainer';


@inject('PlanetsStore')
@observer

class Planets extends Component {

    followMouse=()=>{
        var x = null;
        var y = null;
            
        document.addEventListener('mousemove', onMouseUpdate, false);
        document.addEventListener('mouseenter', onMouseUpdate, false);
            
        function onMouseUpdate(e) {
          x = e.pageX;
          y = e.pageY;
          
          //   document.getElementById("solar-system").style.transform =(x,1,y) ;
        //   var   element=document.getElementById("solar-system");
        //   var   element1=document.getElementById("sun");
        //   var ctx = element1.getContext('webgl', {
        //     antialias: false,
        //     depth: false
        //   });;

        //   ctx.beginPath(); 
        //   ctx.lineWidth = "";
        //   ctx.strokeStyle = "green"; // Green path
        //   ctx.moveTo(x, y);
        //   ctx.lineTo(x, y);
        //   ctx.stroke(); // Draw it
        //   element.style.transform=` rotateX(${xnew}deg)   `;
        //   element1.style.transform=` rotateY(${-xnew}deg)   `;
        //   console.log(xnew, ynew);

        }
    }

    loadStars=()=>{
        this.props.PlanetsStore.getArray()
    }

    render() {
        this.loadStars()
        this.followMouse()
        let planetsKeyArr=this.props.PlanetsStore.planetsKeyArr;
        let planetsValueArr=this.props.PlanetsStore.planetsValueArr;
        return (

            planetsKeyArr.map((planet, index) => <Planet planetsKeyArr={planet} planetsValueArr={planetsValueArr[planet]} key={index} />)
        )

    }
}
export default Planets;