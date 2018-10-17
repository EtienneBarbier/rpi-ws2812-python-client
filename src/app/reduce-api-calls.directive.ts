import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { auditTime } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

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
  constructor() { }

  resetFirst(event){
    this.first = true;
  }

  ngOnInit() {
    this.subscription_inputs = this.inputs.pipe(
      auditTime(300)
    ).subscribe(e => this.auditInput.emit(e));
    this.subscription_first_reset = this.first_reset.pipe(
      debounceTime(500)
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
