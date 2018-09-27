import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessSelectorComponent } from './brightness-selector.component';

describe('BrightnessSelectorComponent', () => {
  let component: BrightnessSelectorComponent;
  let fixture: ComponentFixture<BrightnessSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightnessSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
