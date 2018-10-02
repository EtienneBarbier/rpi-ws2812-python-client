import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

var demoColorPicker: any;

var first_request: boolean;

@Component({
  selector: 'app-wheel-color-picker',
  templateUrl: './wheel-color-picker.component.html',
  styleUrls: ['./wheel-color-picker.component.css']
})

export class WheelColorPickerComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
    first_request = true;
    demoColorPicker = new iro.ColorPicker("#color-picker-container", {
      color: {r: 255, g: 255, b: 255},
      borderWidth: 0,
      sliderMargin: 24,
      sliderHeight: 24,
      removeSlider: true,
    });
    demoColorPicker.on("mount", () => {
      var color: any = [255,255,255];
      this.httpClient.get('http://127.0.0.1:5000/settings').subscribe(
        (result) => {
          color = result["color"];
          demoColorPicker.color.rgb =  { r: color[0], g: color[1], b: color[2] };
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      $(".iro__marker__outer").remove();
      // $(".iro__slider").attr("style","display: none; visibility: hidden; pointer-events: none;");
      $(".iro__marker__inner").attr("fill",'white');
      $(".iro__marker__inner").attr("stroke", 'black');
      $("#color-picker-container").children().first().attr("style","touch-action: inherit; display: block;");
      // var svg_layout = document.getElementById("color-picker-container").childNodes.item(0).setAttribute("style","touch-action: inherit; display: block;");
    });
  }

  ngOnInit() {

  }


  ngAfterViewInit(){
    demoColorPicker.on("color:change", (color, changes) => {
      if(first_request){
        first_request = false;
        return;
      }

      // Log the color's hex RGB value to the dev console
      this.httpClient.get('http://127.0.0.1:5000/color?red='+color.rgb.r+'&blue='+color.rgb.b+'&green='+color.rgb.g).subscribe(
        () => {
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    });
  }
}
