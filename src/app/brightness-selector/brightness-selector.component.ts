import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brightness-selector',
  templateUrl: './brightness-selector.component.html',
  styleUrls: ['./brightness-selector.component.css']
})
export class BrightnessSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  value: any = 100;


  formatLabel(value: number | null) {
    return value + ' %';
  }

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:5000/settings').subscribe(
      (result) => {
        this.value = result["brightness"]*100;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }


  OnChange(event){
    this.httpClient.post('http://127.0.0.1:5000/settings', { brightness: (event.value/100) }).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
