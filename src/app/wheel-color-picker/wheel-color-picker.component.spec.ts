import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelColorPickerComponent } from './wheel-color-picker.component';

describe('WheelColorPickerComponent', () => {
  let component: WheelColorPickerComponent;
  let fixture: ComponentFixture<WheelColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
