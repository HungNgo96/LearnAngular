import { Component, HostBinding, Input, OnInit } from '@angular/core';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

@Component({
  selector: 'flex-container',
  template: `<ng-content></ng-content>`
})
export class FlexContainerComponent implements OnInit {
  ngOnInit(): void
  {

  }
  @Input() flexDirection: FlexDirection = 'row';

  @HostBinding('style.display') get display() {
    return  this.flexDirection;
  }

  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
}

