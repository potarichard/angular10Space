import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  searchText:string;

  ngOnInit(): void {
  }

  generatePrime(): number {
    console.log("Generating now....");
    return 31;
  }

  validator(): boolean {
    if(this.generatePrime()%2 == 1)
      return true;
    return false;
  }

  filterOrder(smtgh:string): number {

    switch(smtgh) {
      case 'null':
        return -1;
      case 'fresh':
        return 1010;
    }
    return 0;
  }
}
