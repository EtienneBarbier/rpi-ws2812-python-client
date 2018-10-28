import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../app-config.service'


@Component({
  selector: 'app-speed-selector',
  templateUrl: './speed-selector.component.html',
  styleUrls: ['./speed-selector.component.css']
})
export class SpeedSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient, public appConfig: AppConfigService) { }

  speed: any = 0;


  ngOnInit() {
    this.httpClient.get(this.appConfig.getConfig().apiUrl+'/settings').subscribe(
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
    this.httpClient.post(this.appConfig.getConfig().apiUrl+'/settings', { speed: event.value }).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
