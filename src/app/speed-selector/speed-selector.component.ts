import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../app-config.service'
import { AppStateService } from '../app-state.service'



@Component({
  selector: 'app-speed-selector',
  templateUrl: './speed-selector.component.html',
  styleUrls: ['./speed-selector.component.css']
})
export class SpeedSelectorComponent implements OnInit {

  constructor(private httpClient: HttpClient, public appConfig: AppConfigService, public appState: AppStateService) { }

  speed: any = 0;


  ngOnInit() {
    this.speed = this.appState.getState().speed;
  }

  OnChange(event){
    // console.log((event.value-100)/16);
    // console.log(event.value);
    this.httpClient.post(this.appConfig.getConfig().apiUrl+'/settings', { speed: event.value }).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
