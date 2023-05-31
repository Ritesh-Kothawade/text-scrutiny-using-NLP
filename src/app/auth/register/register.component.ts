import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPass: string = '';
  fullName: string = '';
  companyName: string = '';
  role: string = '';
  isEmailVerified: boolean = true;
  validationerr?: boolean;
  registerForm: any;
  emailEntered = false;
  emailValid = false;
  passwordValid = false;
  passwordEntered = false;
  

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checkEmailValidity(){
    this.emailEntered = true;
    this.emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }
  
  checkPasswordValidity(){
    this.passwordEntered = true;
    this.passwordValid = /^.{8,}$/.test(this.password);
  }

  onSubmit(): void {
    this.validationerr =(
      this.email &&
      this.password &&
      this.confirmPass &&
      this.fullName &&
      this.companyName &&
      this.role)
        ? false
        : true;
    if (
      this.email &&
      this.password &&
      this.confirmPass &&
      this.fullName &&
      this.companyName &&
      this.role 
      ) {
      this.authService.register(
        this.email,
        this.password,
        this.confirmPass,
        this.fullName,
        this.companyName,
        this.role,
        this.isEmailVerified
      );
      if(this.confirmPass === this.password){
        this.validationerr = false
      
      }
      
      console.log("true")
      window.alert("Registration Successful!!")      
      this.router.navigate(['/auth/login']);
    }
  }
}
