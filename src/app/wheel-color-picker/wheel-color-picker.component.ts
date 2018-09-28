import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

var demoColorPicker: any;

@Component({
  selector: 'app-wheel-color-picker',
  templateUrl: './wheel-color-picker.component.html',
  styleUrls: ['./wheel-color-picker.component.css']
})

export class WheelColorPickerComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
    demoColorPicker = new iro.ColorPicker("#color-picker-container", {
      color: {r: 255, g: 0, b: 0},
      borderWidth: 0,
      sliderMargin: 24,
      sliderHeight: 24,
      removeSlider: true,
    });
    demoColorPicker.on("mount", function() {
      $(".iro__marker__outer").remove();
      // $(".iro__slider").attr("style","display: none; visibility: hidden; pointer-events: none;");
      $(".iro__marker__inner").attr("fill",'white');
      $(".iro__marker__inner").attr("stroke", 'black');
      $("#color-picker-container").children().first().attr("style","touch-action: inherit; display: block;");
      // var svg_layout = document.getElementById("color-picker-container").childNodes.item(0).setAttribute("style","touch-action: inherit; display: block;");
    });
  }

  // var demoColorPicker = new iro.ColorPicker("#color-picker-container");

  ngOnInit() {

  }


  ngAfterViewInit(){
    // demoColorPicker.on("color:change", function(color, changes, that=this) {
    //   // Log the color's hex RGB value to the dev console
    //   console.log(color.hexString);
    //   console.log(this);
    //   // that.httpClient.get('http://127.0.0.1:5000/color?red=255').subscribe(
    //   //   () => {
    //   //   },
    //   //   (error) => {
    //   //     console.log('Erreur ! : ' + error);
    //   //   }
    //   // );
    //   // If the "H" channel has changed, log the color's HSV value too
    //   if (changes.h) {
    //     console.log(color.hsv);
    //   }
    // });

    demoColorPicker.on("color:change", (color, changes) => {
      // Log the color's hex RGB value to the dev console
      console.log(color.hexString);
      console.log(color.rgb);
      this.httpClient.get('http://127.0.0.1:5000/color?red='+color.rgb.r+'&blue='+color.rgb.b+'&green='+color.rgb.g).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      // If the "H" channel has changed, log the color's HSV value too
      if (changes.h) {
        console.log(color.hsv);
      }
    });

  }


}
