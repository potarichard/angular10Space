import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  message:string = "Hello";
  countClicks: number;

  ngOnInit() {
    this.countClicks = 0;
  }

  addClick(){
    this.countClicks++;
  }

  removeClick(){
    this.countClicks--;
  }

  toggleMessage() {
    if(this.message === "Hello")
      this.message = "ByeBye";
    else if(this.message === "ByeBye")
      this.message = "Hello";
  }

}
