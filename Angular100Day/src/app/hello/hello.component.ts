import { Component, Input } from "@angular/core";


@Component({
  selector:'app-hello',
  template:'<h1>Hello angular {{name}}100 days</h1>'
})


export class HelloComponent{
  @Input() name!: string;
  ngOnInit(){
    console.log("ngOnInit");
  }
  ngOnDeploy(){
    console.log("ngOnDeploy");
  }
}
