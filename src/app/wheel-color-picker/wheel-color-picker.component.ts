import { forwardRef, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import iro from '@jaames/iro';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const COLOR_PICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WheelColorPickerComponent),
  multi: true
};

declare var jquery:any;
declare var $ :any;

var demoColorPicker: any;

var first_request: boolean;

@Component({
  selector: 'app-wheel-color-picker',
  template: '<div id="color-picker-container"></div>',
  styles: ['#color-picker-container { max-width: 320px; margin: 40px auto; }',
  '.iro__marker__outer { fill: white; }'],
  providers: [COLOR_PICKER_VALUE_ACCESSOR]
})

export class WheelColorPickerComponent implements AfterViewInit {
  private onTouched = () => { };
  private onChange: (value: string) => void = () => { };

  @Input() color = [255,255,255];

  writeValue(color: [number,number,number]){
    if(color != undefined){
      this.color = color;
    }
    if(demoColorPicker.color != undefined){
      demoColorPicker.color.rgb =  { r: this.color[0], g: this.color[1], b: this.color[2] };
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  @Output() input = new EventEmitter();

  // @ViewChild('color-picker-container') input: ElementRef;

  constructor(private httpClient: HttpClient) {
    first_request = true;
    demoColorPicker = new iro.ColorPicker("#color-picker-container", {
      color: {r: 255, g: 255, b: 255},
      borderWidth: 0,
      sliderMargin: 24,
      sliderHeight: 24,
      removeSlider: true,
    });
    // console.log(this.color);


    // console.log(jquery(this.input.nativeElement))

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    demoColorPicker.on("mount", () => {
      demoColorPicker.color.rgb =  { r: this.color[0], g: this.color[1], b: this.color[2] };
      $(".iro__marker__outer").remove();
      $(".iro__marker__inner").attr("fill",'white');
      $(".iro__marker__inner").attr("stroke", 'black');
      $(".iro__slider").attr("display",'none');
      $(".iro__slider").attr("visibility", 'hidden');
      $("#color-picker-container").children().first().attr("style","touch-action: inherit; display: block;");
      // console.log(jquery(this.input.nativeElement))

    });

    demoColorPicker.on("color:change", (color, changes) => {
      if(first_request){
        first_request = false;
        return;
      }
      this.color = color.rgb;
      this.onChange(color.rgb);
      this.onTouched();
      this.input.next(color);
    });
  }
}
