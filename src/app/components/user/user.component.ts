import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice:UserService) { }

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

}
