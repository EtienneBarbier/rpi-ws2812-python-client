import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private appConfig;
  
  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('assets/config.json')
      .toPromise()
      .then(
        (data) => {
          this.appConfig = data;
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
