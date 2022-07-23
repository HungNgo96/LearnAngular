import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  user = {
    'userName':'hungnt145',
    'age':26
  };

  users = [{
    'userName':'hungnt1',
    'age':22
  },{
    'userName':'hungnt2',
    'age':13
  },{
    'userName':'hungnt3',
    'age':15
  },{
    'userName':'hungnt4',
    'age':34
  },{
    'userName':'hungnt5',
    'age':26
  },{
    'userName':'hungnt6',
    'age':33
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
