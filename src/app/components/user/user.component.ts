import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice:UserService) { }

  just_nums:number[] = [1,2,3,4,5];

  @ViewChild('inc_1') input_element : ElementRef;
  @ViewChild('prod_1') prod_1 : ProductComponent;
  @ViewChildren('prods') prods : QueryList<ProductComponent>;

  ngOnInit(): void {
    let what = this.userservice.getAll().subscribe((resp) => console.log(resp));
  }

  html_addOneUser() {
    let user = {name: "Bikalo"};
    this.userservice.addOne(user).subscribe((res)=> console.log(res));
  }

  html_getOneUser() {
    this.userservice.getOne(301).subscribe((res)=> console.log(res));
  }

  html_patchOneUser() {
    let user = {id: 202, name: "BikaloPatched"};
    this.userservice.addOne(user).subscribe((res)=> console.log(res));
  }

  html_deleteOneUser() {
    this.userservice.deleteOne(201).subscribe((res)=> console.log(res));
  }

  html_logElements() {    
    console.log(this.input_element);
    console.log(this.prod_1);
    console.log(this.prods);

    this.prod_1.message = "Changed";
    this.prods.forEach(p =>p.toggleMessage());
  }

}
