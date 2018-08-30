import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatDividerModule,
  MatSnackBarModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { PowerComponent } from './power/power.component';
import { WheelColorPickerComponent } from './wheel-color-picker/wheel-color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationListComponent,
    PowerComponent,
    WheelColorPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatTabsModule, MatSidenavModule, MatToolbarModule, MatDividerModule, MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }