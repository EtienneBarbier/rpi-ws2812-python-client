import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSlideToggleModule, MatSliderModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatDividerModule, MatIconModule,
  MatSnackBarModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { PowerComponent } from './power/power.component';
import { WheelColorPickerComponent } from './wheel-color-picker/wheel-color-picker.component';
import { BrightnessSelectorComponent } from './brightness-selector/brightness-selector.component';
import { SpeedSelectorComponent } from './speed-selector/speed-selector.component';
import { ReduceApiCallsDirective } from './reduce-api-calls.directive';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { CookieService } from 'ngx-cookie-service';

import { AppConfigService } from './app-config.service';
import { AppStateService } from './app-state.service';

const appInitializerFn = (appConfig: AppConfigService, appState: AppStateService) => {
  return () => {
    return appConfig.loadAppConfig().then(() => {
      return appState.loadAppState();
    });
  };
};

@NgModule({
  declarations: [
    AppComponent,
    AnimationListComponent,
    PowerComponent,
    WheelColorPickerComponent,
    BrightnessSelectorComponent,
    SpeedSelectorComponent,
    ReduceApiCallsDirective,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSlideToggleModule, MatSliderModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatTabsModule, MatSidenavModule, MatToolbarModule, MatDividerModule, MatSnackBarModule, MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    AppConfigService,
    AppStateService,
    CookieService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService, AppStateService]
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializerStateFn,
    //   multi: true,
    //   deps: [AppStateService, AppConfigService]
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
export class PizzaPartyAppModule { }
