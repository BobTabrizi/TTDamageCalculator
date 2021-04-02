import { Component, OnInit } from '@angular/core';
import { toons } from '../toons';

@Component({
  selector: 'app-toon-list',
  templateUrl: './toon-list.component.html',
  styleUrls: ['./toon-list.component.css']
})
export class ToonListComponent implements OnInit {

toons = toons;

gagString: String = "Hello";

gagChoice(name:string,id:number): void {

  console.log(id);
  toons[id - 1].gag = name;
  //this.gagString = name;
}

  ngOnInit(): void {
  }

}
