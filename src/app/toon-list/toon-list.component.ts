import { Component,Output, OnInit,EventEmitter } from '@angular/core';
import { toons } from '../toons';
import {gagInfo} from '../gagInfo';

@Component({
  selector: 'app-toon-list',
  templateUrl: './toon-list.component.html',
  styleUrls: ['./toon-list.component.css']
})
export class ToonListComponent implements OnInit {

  @Output() buttonClicked:EventEmitter<number> = new EventEmitter<number>();
message:string = "Hello";

toons = toons;
gagInfo = gagInfo;

gagString: String = "Hello";

damage:number = 0;

maxlimitReached:boolean = false;
minlimitReached:boolean = false;


calculateDamages(){

var gagCounts = new Array(7);

for(var i =0; i < gagCounts.length; i++){

  gagCounts[i] = new Array(0);
}




let LureActive = false;
let SoakActive = false;

for(var j = 0; j < toons.length; j++){

  if(toons[j].gagType !== 9){
  gagCounts[toons[j].gagType].push(toons[j].midRange);

  }
}

/*Checking conditional damage gags.
 Lure for knockback bonus and trap/drop interactions
 Squirt for Zap interaction
 Trap to check if a conflicting trap is used
 Drop to check if cogs are lured
*/
if(gagCounts[4].length !== 0){
    LureActive = true;
}

if(gagCounts[2].length !== 0){
    SoakActive = true;
}

//If Trap is used in the round, check if another trap and/or lure is used.
if(gagCounts[5].length !== 0){

  //If lure is not used or multiple traps used, cancel all trap gag damage.
  if(!(gagCounts[5].length === 1) ||  !(LureActive)){
    gagCounts[5].length = 0;
  }
  
}

// If Drop is used in the round, 
if(gagCounts[6].length !== 0){

  //Check if lure is used
  if(LureActive){

    //Check if cog is woken up before drop is used
    var luredCog = true;
    for(var i = 0; i < 6;i++){
      if(i !== 4){


        if(gagCounts[i].length !==0){
          luredCog = false;
        }

      }

    }

    //If cog is lured and not woken up, cancel drop damage.
    if(luredCog){
      gagCounts[6].length = 0;
    }
  }

}

//Check if Zap is used in the round
if(gagCounts[3].length !==0){


   //Check if cog is soaked by squirt, if soaked mult all zap damage by 3.
   if(SoakActive){

    for(var i = 0; i < gagCounts[3].length; i++){
      gagCounts[3][i] = gagCounts[3][i] * 3;
    }

   }


}

//Sum up all damage, giving bonus multiplier to qualifying gag tracks


let sumDamage = 0;
let tempDamage = 0;

for(var i = 0; i < gagCounts.length; i++){

  console.log(gagCounts[i].length);
  
  if(gagCounts[i].length > 1){

    for(var j = 0; j < gagCounts[i].length; j++){

        tempDamage += gagCounts[i][j];
      
    }
    //Add bonus multiplier

    tempDamage = Math.ceil(tempDamage + tempDamage * 0.20);

    sumDamage += tempDamage;
    tempDamage = 0;
  }

  if(gagCounts[i].length === 1){
    sumDamage += gagCounts[i][0];
  }


}

/*
for(let i = 0; i < toons.length; i++){

  sumDamage += toons[i].midRange;

}

*/
  return sumDamage;
}

clickButton(){


 let totalDamage = this.calculateDamages();


  this.buttonClicked.emit(totalDamage);
}

gagChoice(gagNumber:number,id:number): void {

  //console.log(id);
  toons[id - 1].gag = gagInfo[gagNumber - 1].gag;
  toons[id - 1].midRange = gagInfo[gagNumber - 1].midRange;
  toons[id - 1].maxRange = gagInfo[gagNumber -1].maxRange;
  toons[id - 1].minRange = gagInfo[gagNumber -1].minRange;
  toons[id - 1].gagType = gagInfo[gagNumber - 1].gagType;
}




  ngOnInit(): void {
  }

}
