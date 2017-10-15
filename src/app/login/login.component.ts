import { AuthGuardService } from './../core/auth-guard.service';
import { Router } from '@angular/router';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  showLogin: boolean;

  constructor(private autsService: AuthService,
    private authGuard: AuthGuardService,
    private router: Router) { }

  ngOnInit() {
    this.showLogin = true;
    if (this.authGuard.checkLogin()) {
      // this.showLogin = false; не обязательно
      this.router.navigate(['corpactions', 'cas']);
    }
  }

  login() {
    this.autsService.login(this.username, this.password).subscribe(isLogged => {
      if (isLogged) {
        console.log('Logged!');

        this.router.navigate(['corpactions', 'cas']);
      }
    });
  }
}
