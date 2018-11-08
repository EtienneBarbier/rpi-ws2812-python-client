import { Component, OnInit} from '@angular/core';
import { AppConfigService } from './app-config.service'
import { AppStateService } from './app-state.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = "Application Name";
  public errors = {};
  noError: boolean = false;
  // stateError: boolean = false;
  // configError: boolean = false;
  // urlError: boolean = false;

  constructor(public appConfig: AppConfigService,public appState: AppStateService) {
  }

  errorsInit(){
    var config = this.appConfig.getConfig();
    var state = this.appState.getState();
    this.errors['config'] = (config == null);
    this.errors['url'] = (config != null && config.apiUrl == null);
    this.errors['state'] = (config != null && config.apiUrl != null && state == null);
    this.errors['error'] = (this.errors['config'] || this.errors['url'] || this.errors['state']);
  }

  ngOnInit(){
    var config = this.appConfig.getConfig();
    this.errorsInit();
    if(!this.errors['config']){
      this.title = config.name;
    }
  }
}
