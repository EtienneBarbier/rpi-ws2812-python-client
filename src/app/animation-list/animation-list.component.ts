import { Component, OnInit } from '@angular/core';

export interface Animation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-animation-list',
  templateUrl: './animation-list.component.html',
  styleUrls: ['./animation-list.component.css']
})
export class AnimationListComponent implements OnInit {

  animations: Animation[] = [
    {value: 'setTheaterChaseRainbow', viewValue: 'Theater Chase Rainbow'},
    {value: 'setRainbow', viewValue: 'Rainbow'},
    {value: 'setRainbowCycle', viewValue: 'Rainbow Cycle'},
    {value: 'setAll', viewValue: 'All'},
    {value: 'setOff', viewValue: 'Off'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
