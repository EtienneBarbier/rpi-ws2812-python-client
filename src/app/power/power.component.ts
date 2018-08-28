import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  mySwitch: boolean = false;


  OnButtonClick(event){
    if(!this.mySwitch){
      this.httpClient.get('http://127.0.0.1:5000/start').subscribe(
        () => {
              console.log('Start ok !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }else{
      this.httpClient.get('http://127.0.0.1:5000/stop').subscribe(
        () => {
              console.log('Stop ok !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }

  }

}
