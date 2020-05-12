import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { FormGroupDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.email,
      Validators.required]],
      Password: ['',[ Validators.required
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]+)$')
      ]]
    }); 
    
  }

  submitHandler(formDirective: FormGroupDirective) {
    this.authService.postLogin(this.loginForm.value, formDirective);
  }

    get Email(){
      return this.loginForm.get('Email');
    }

    get Password(){
      return this.loginForm.get('Password');
    }

    getErrorMessageEmail() {
      if (this.Email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.Email.hasError('email') ? 'Not a valid email' : '';
    }

    getErrorMessagePassword(){
      if (this.Password.hasError('required')){
        return 'You must enter a value';
      }
      return this.Password.hasError('password') ? 'Not a valid password' : '';
    }
}