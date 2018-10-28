import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../app-config.service'



@Component({
  selector: 'app-brightness-selector',
  templateUrl: './brightness-selector.component.html',
  styleUrls: ['./brightness-selector.component.css']
})

export class BrightnessSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient, public appConfig: AppConfigService) {}

  value: any = 100;


  formatLabel(value: number | null) {
    return value + ' %';
  }

  ngOnInit() {
    this.httpClient.get(this.appConfig.getConfig().apiUrl+'/settings').subscribe(
      (result) => {
        this.value = result["brightness"]*100;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }


  OnInput(event){
    this.httpClient.post(this.appConfig.getConfig().apiUrl+'/settings', { brightness: (event.value/100) }).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
