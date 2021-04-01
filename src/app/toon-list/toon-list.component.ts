import { Component, OnInit } from '@angular/core';
import { toons } from '../toons';

@Component({
  selector: 'app-toon-list',
  templateUrl: './toon-list.component.html',
  styleUrls: ['./toon-list.component.css']
})
export class ToonListComponent implements OnInit {

toons = toons;

  ngOnInit(): void {
  }

}
