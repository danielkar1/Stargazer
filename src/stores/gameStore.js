import { observable, inject, action , computed } from 'mobx';
import planetStore from './PlantesStore'

class GamesStore  {

   @observable counter=0


    @action winGame=(e)=>{
       if(this.counter!==4){
           this.checkIndex(e)
       }
    }
    
    @action checkIndex = (e)=> { 
        console.log("checkindex func begin ")
        let orderInterval= this.counter+1
           if(orderInterval===planetStore.Planets[e].position){
               this.counter=planetStore.Planets[e].position
              return console.log("You are right!")
              
             }else{
                setTimeout(()=>{
                    planetStore.ChangePlanetClass(e)
                },1000)
                this.orderInreval-=1;
                 return console.log("Wrong")
             }
            
    }
}
  

let gameStore=new GamesStore()

export default gameStore