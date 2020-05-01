import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email,
      Validators.required]],
      password: ['',[ Validators.required
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]+)$')
      ]]
    }); 
  }

    get email(){
      return this.loginForm.get('email');
    }

    get password(){
      return this.loginForm.get('password');
    }

    getErrorMessageEmail() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getErrorMessagePassword(){
      if (this.password.hasError('required')){
        return 'You must enter a value';
      }
      return this.password.hasError('password') ? 'Not a valid password' : '';
    }
}