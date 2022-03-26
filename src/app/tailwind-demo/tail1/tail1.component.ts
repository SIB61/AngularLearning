import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tail1',
  templateUrl: './tail1.component.html',
  styleUrls: ['./tail1.component.scss']
})
export class Tail1Component implements OnInit {
  constructor() { }
  hidden = true
  ngOnInit(): void {
  }

  hide(p:boolean){
    this.hidden = p
  }

}
