import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SayHiComponent } from './say-hi/say-hi.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ClassbindingComponent } from './class-binding/class-binding.component';
import { InuputBindingComponent } from './inuput-binding/inuput-binding.component';

@NgModule({
  declarations: [
    AppComponent,HelloComponent, SayHiComponent, StructuralDirectiveComponent, ClassbindingComponent, InuputBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
