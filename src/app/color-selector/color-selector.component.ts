import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../app-config.service'
import { AppStateService } from '../app-state.service'



declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  color: any = [255,255,255];
  first_request: boolean;

  constructor(private httpClient: HttpClient, public appConfig: AppConfigService, public appState: AppStateService) {
    this.color = this.appState.getState().color;
    this.first_request = true;
  }

  onColorChange(color) {
    if(! this.first_request){
      this.httpClient.get(this.appConfig.getConfig().apiUrl+'/color?red='+color.rgb.r+'&blue='+color.rgb.b+'&green='+color.rgb.g).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }
    this.first_request = false;

  }

  ngOnInit() {
  }


  ngAfterViewInit(){
  }
}
