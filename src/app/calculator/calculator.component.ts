import { Component, OnInit } from '@angular/core';
import {toons} from '../toons';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  toon = toons;

  toonDamage:number = 0;
  constructor() {





   }

valueEmittedFromChildComponent: number = 0;


parentEventHandlerFunction(valueEmitted:number){
  this.valueEmittedFromChildComponent = valueEmitted;
  console.log("hello");
}

  ngOnInit(): void {
  }


}
