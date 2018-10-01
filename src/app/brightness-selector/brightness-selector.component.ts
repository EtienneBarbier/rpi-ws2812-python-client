import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var value: any;

@Component({
  selector: 'app-brightness-selector',
  templateUrl: './brightness-selector.component.html',
  styleUrls: ['./brightness-selector.component.css']
})
export class BrightnessSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  formatLabel(value: number | null) {
    return value + ' %';
  }

  ngOnInit() {
  }
  value = 100;
  OnChange(event){
    this.httpClient.get('http://127.0.0.1:5000/settings?brightness='+(event.value/100)).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
