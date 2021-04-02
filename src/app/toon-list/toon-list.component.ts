import { Component, OnInit } from '@angular/core';
import { toons } from '../toons';
import {gagInfo} from '../gagInfo';

@Component({
  selector: 'app-toon-list',
  templateUrl: './toon-list.component.html',
  styleUrls: ['./toon-list.component.css']
})
export class ToonListComponent implements OnInit {

toons = toons;
gagInfo = gagInfo;

gagString: String = "Hello";



gagChoice(gagNumber:number,id:number): void {

  console.log(id);
  toons[id - 1].gag = gagInfo[gagNumber - 1].gag;

  toons[id - 1].maxRange = gagInfo[gagNumber -1].maxRange;
}

  ngOnInit(): void {
  }

}
