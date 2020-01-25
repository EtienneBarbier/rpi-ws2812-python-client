import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private appConfig;

  constructor(private http: HttpClient ) {}

  loadAppConfig() {
    return this.http.get('assets/config.json')
      .toPromise()
      .then(
        (data) => {
          this.appConfig = data;
          if (this.appConfig.apiAddr === 'localhost' || this.appConfig.apiAddr === '') {
            const url = 'http://' + window.location.hostname + ':' + this.appConfig.apiPort;
            this.appConfig.apiUrl = url;
          } else {
            const url = 'http://' + this.appConfig.apiAddr + ':' + this.appConfig.apiPort;
            this.appConfig.apiUrl =  url;
          }
        },
        (error) => {
          this.appConfig = null;
        }
    );
  }

  getConfig() {
    return this.appConfig;
  }
}
