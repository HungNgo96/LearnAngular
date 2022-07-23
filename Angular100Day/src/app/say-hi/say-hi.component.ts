import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-say-hi',
  templateUrl: './say-hi.component.html',
  styleUrls: ['./say-hi.component.css']
})
export class SayHiComponent implements OnInit {
  name = 'Angular' + VERSION.major;
  user = {
    'username':'hungnt145',
    'age':26
  }
  handleCick(event: MouseEvent){
    console.log('KeyboardEvent', event);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onMouseOver(event?: MouseEvent){ console.log('onMouse', event); }
  constructor() { }

  ngOnInit(): void {
  }

}
