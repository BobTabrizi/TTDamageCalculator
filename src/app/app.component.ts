import { Component } from '@angular/core';

export interface Gag {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TTDamageCalculator';
  selected: String = "";
  selectedGag:String = "";
  gags: Gag[] = [
    { value: 'Sound', viewValue: 'Sound' },
    { value: 'Throw', viewValue: 'Throw' },
    { value: 'Drop', viewValue: 'Drop' },
    { value: 'Lure', viewValue: 'Lure' },
  ];
  ngOnInit(){
    this.selected = this.gags[1].value;
    this.selectedGag = this.gags[1].value;
  }
}
