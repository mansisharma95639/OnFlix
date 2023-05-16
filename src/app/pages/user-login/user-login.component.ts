import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

homePage : boolean = false;
  constructor() { }
  ngOnInit(): void {
    console.log(this.homePage);
  }

  logIn(){
    this.homePage = true;
    console.log(this.homePage);
  }
}


