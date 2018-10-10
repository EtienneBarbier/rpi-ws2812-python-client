import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



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
    {value: 'theater_chase_rainbow', viewValue: 'Theater Chase Rainbow'},
    {value: 'rainbow', viewValue: 'Rainbow'},
    {value: 'rainbow_cycle', viewValue: 'Rainbow Cycle'},
    {value: 'all', viewValue: 'All'},
  ];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  OnPlayButtonClick(event,animation){
    console.log(animation);

    this.httpClient.get(environment.API_URL+'/annimation?id='+animation.value).subscribe(
      () => {

      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
