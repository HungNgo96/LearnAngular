import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  listen(port: unknown) : string | number{
    if (typeof port === 'string') {
      port = parseInt(port, 10);
    }
    return '';
  }
  merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
    return { ...o1, ...o2 };
  }



  demo(): void {
    typeof 'string'; // string
    typeof 123; // number
    typeof true; // boolean
    typeof {}; // object
    typeof []; // object
    typeof (() => {}); // function
    typeof null; // object
    typeof undefined; // undefined
    typeof new Date(); // object

    typeof String; // function
    typeof Boolean; // function
    typeof NaN; // number

    typeof typeof 123; // string
    this.listen('d');
    this.merge({ foo: 'bar' }, { bar: 'foo' });
  }
}
