import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
  
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['' , 
      [Validators.required,
        Validators.minLength(2)
      ]], 
      lastName: ['' , 
      [Validators.required,
        Validators.minLength(2)
      ]], 
      email: ['', [Validators.email,
      Validators.required]],
      password: ['',[ Validators.required
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]+)$')
      ]]
    }); 
  }

    get email(){
      return this.myForm.get('email');
    }

    get firstName(){
      return this.myForm.get('firstName');
    }

    get lastName(){
      return this.myForm.get('lastName');
    }

    get password(){
      return this.myForm.get('password');
    }

    getErrorMessageFirstName(){
      if (this.firstName.hasError('required')){
        return 'You must enter a value';
      }
    }

    getErrorMessageLastName(){
      if (this.lastName.hasError('required')){
        return 'You must enter a value';
    }
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

