import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../app-config.service'


declare var jquery:any;
declare var $ :any;

var first_request: boolean;

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  color: any = [255,255,255];

  constructor(private httpClient: HttpClient, public appConfig: AppConfigService) {
    this.httpClient.get(this.appConfig.getConfig().apiUrl+'/settings').subscribe(
      (result) => {
        this.color = result["color"];
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  onColorChange(color) {
    this.httpClient.get(this.appConfig.getConfig().apiUrl+'/color?red='+color.rgb.r+'&blue='+color.rgb.b+'&green='+color.rgb.g).subscribe(
      () => {
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  ngOnInit() {
  }


  ngAfterViewInit(){
  }
}
