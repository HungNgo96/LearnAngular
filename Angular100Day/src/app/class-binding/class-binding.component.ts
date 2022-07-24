import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isDanger = false;
  isWarning = false;
}
