import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-speed-selector',
  templateUrl: './speed-selector.component.html',
  styleUrls: ['./speed-selector.component.css']
})
export class SpeedSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  speed: any = 0;


  ngOnInit() {
    this.httpClient.get(environment.API_URL+'/settings').subscribe(
      (result) => {
        this.speed = result["speed"];
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  OnChange(event){
    console.log((event.value-100)/16);
    console.log(event.value);
    this.httpClient.post(environment.API_URL+'/settings', { speed: event.value }).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
