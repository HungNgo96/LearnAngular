import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-inuput-binding',
  templateUrl: './inuput-binding.component.html',
  styleUrls: ['./inuput-binding.component.css']
})
export class InuputBindingComponent implements OnInit {

  constructor() {
    console.log('app-inuput-binding constructor');
  }

  ngOnInit(): void {
    console.log('app-inuput-binding ngOnInit');
  }

  ngOnChanges(changes: SimpleChange): void {
    if(this.progress > 90){
      this.backgroundColor = "bg-success";
      console.log('this.progress > 90', this.backgroundColor);
    }
    console.log('app-inuput-binding ngOnChanges',changes);
  }

  // @Input() progress = 50;
  @Input() set progress(val: number){
    //validation for val
    if(typeof val !== 'number'){
      const progress = Number(val);
      if(Number.isNaN(progress)){
        this._progress = 0;
      }else{
        this._progress = progress;
      }
    }

  }
  private _progress = 50;

  get progress(){
    return this._progress;
  }
  @Input() backgroundColor = 'bg-primary';
}
