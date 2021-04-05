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

let sumDamage = 0;

for(let i = 0; i < toons.length; i++){

  sumDamage += toons[i].midRange;

}


  return sumDamage;
}

clickButton(){


 let totalDamage = this.calculateDamages();


  this.buttonClicked.emit(totalDamage);
}

gagChoice(gagNumber:number,id:number): void {

  console.log(id);
  toons[id - 1].gag = gagInfo[gagNumber - 1].gag;
  toons[id - 1].midRange = gagInfo[gagNumber - 1].midRange;
  toons[id - 1].maxRange = gagInfo[gagNumber -1].maxRange;
  toons[id - 1].minRange = gagInfo[gagNumber -1].minRange;
}




  ngOnInit(): void {
  }

}
