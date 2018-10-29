import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service'


@Injectable()
export class AppStateService {
  private appState = null;

  constructor(private http: HttpClient, public appConfig: AppConfigService) {}

  loadAppState() {
    return this.http.get(this.appConfig.getConfig().apiUrl+'/settings')
      .toPromise()
      .then(data => {
        this.appState = data;
      });
  }

  getState() {
    return this.appState;
  }
}
