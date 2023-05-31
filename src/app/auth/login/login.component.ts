import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  emailEntered = false;
  emailValid = false;
  password: string = '';
  
  validationerr?: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.validationerr = this.authService.login(this.email, this.password)
      ? false
      : true;
    
    if (this.email !== '' && this.password !== '') {
      if (this.authService.login(this.email, this.password)) {
        window.alert("Logged in Succesfully!!");
        this.router.navigate(['/home-page']);
      }
    }
  }
  clicked(){
    window.alert("This functionality is in progress!!")
  }

  checkEmailValidity(){
    this.emailEntered = true;
    this.emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }
}
