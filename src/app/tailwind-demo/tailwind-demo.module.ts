import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tail1Component } from './tail1/tail1.component';
import { Tail2Component } from './tail2/tail2.component';



@NgModule({
  declarations: [
    Tail1Component,
    Tail2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Tail1Component
  ]
})
export class TailwindDemoModule { }
