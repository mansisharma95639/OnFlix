import { Component, HostListener, Output } from '@angular/core';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'showtime';
  bannerResult : any;
  navbg: any;

  ngOnInit(): void {
  }
  constructor(private router: Router){}
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color' : '#000000'
      }
    }
    else
    {
      this.navbg = {}
    }
  }
  logIn() {
    this.router.navigate(['/home']);
    console.log("Yes");
  }
}
