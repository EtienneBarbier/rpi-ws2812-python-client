import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject ,  Subscription } from 'rxjs';
import { auditTime ,  debounceTime } from 'rxjs/operators';
import { AppConfigService } from './app-config.service'


@Directive({
  selector: '[appReduceApiCalls]'
})
export class ReduceApiCallsDirective {
  @Output() auditInput = new EventEmitter();
  private inputs = new Subject();
  private first_reset = new Subject();
  private subscription_inputs: Subscription;
  private subscription_first_reset: Subscription;
  private first = true;

  private sleepTime;
  private resetTime;

  constructor(public appConfig: AppConfigService) {
    this.sleepTime = 1000/this.appConfig.getConfig().apiCallMaxFreq;
    this.resetTime = this.sleepTime * 1.5;
  }

  resetFirst(event){
    this.first = true;
  }

  ngOnInit() {
    this.subscription_inputs = this.inputs.pipe(
      auditTime(this.sleepTime)
    ).subscribe(e => this.auditInput.emit(e));
    this.subscription_first_reset = this.first_reset.pipe(
      debounceTime(this.resetTime)
    ).subscribe(e => this.resetFirst(e));
  }


  ngOnDestroy() {
    this.subscription_inputs.unsubscribe();
    this.subscription_first_reset.unsubscribe();
  }


  @HostListener('input', ['$event'])
  inputEvent(event) {
    if(this.first){
      this.auditInput.emit(event);
      this.first = false;
    }else{
      this.inputs.next(event);
    }
    this.first_reset.next(event);

  }

}
