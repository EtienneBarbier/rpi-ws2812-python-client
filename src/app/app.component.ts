import { Component, OnInit} from '@angular/core';
import { AppConfigService } from './app-config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private title;

  constructor(public appConfig: AppConfigService) {
  }

  ngOnInit(){
    // console.log();
    var config = this.appConfig.getConfig();
    this.title = config.name;
  }


}
