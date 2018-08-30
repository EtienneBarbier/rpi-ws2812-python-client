import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

var demoColorPicker: any;

@Component({
  selector: 'app-wheel-color-picker',
  templateUrl: './wheel-color-picker.component.html',
  styleUrls: ['./wheel-color-picker.component.css']
})

export class WheelColorPickerComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {

    demoColorPicker = new iro.ColorPicker("#color-picker-container", {
      color: {r: 255, g: 0, b: 0},
      borderWidth: 0,
      sliderMargin: 24,
      sliderHeight: 24,
    });

    demoColorPicker.on("color:change", function(color, changes) {
      // Log the color's hex RGB value to the dev console
      console.log(color.hexString);
      // If the "H" channel has changed, log the color's HSV value too
      if (changes.h) {
        console.log(color.hsv);
      }
    });

    demoColorPicker.on("mount", function() {
      document.getElementsByClassName("iro__marker__outer").item(1).remove()
      document.getElementsByClassName("iro__marker__outer").item(0).remove()
      var first_circle = document.getElementsByClassName("iro__marker__inner").item(0)
      first_circle.setAttribute("fill",'white');
      first_circle.setAttribute("stroke", 'black');
      var seconde_circle = document.getElementsByClassName("iro__marker__inner").item(1)
      seconde_circle.setAttribute("fill",'white');
      seconde_circle.setAttribute("stroke", 'black');
      var svg_layout = document.getElementById("color-picker-container").childNodes.item(0).setAttribute("style","touch-action: inherit; display: block;");
    });
  }

  // var demoColorPicker = new iro.ColorPicker("#color-picker-container");

  ngOnInit() {

  }

  ngAfterViewInit(){

  }


}
