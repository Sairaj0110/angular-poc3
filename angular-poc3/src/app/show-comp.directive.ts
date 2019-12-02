import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShowComp]'
})
export class ShowCompDirective implements OnChanges {
@Input() showComp;
  constructor() { }
ngOnChanges(){
  this.showComp = true
}
}
