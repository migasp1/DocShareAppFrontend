import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formDirective: FormGroupDirective;
  myForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, public service: RegisterService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      FirstName: ['',
        [Validators.required,
        Validators.minLength(2)
        ]],
      LastName: ['',
        [Validators.required,
        Validators.minLength(2)
        ]],
      Email: ['', [Validators.email,
      Validators.required]],
      Password: ['', [Validators.required
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]+)$')
      ]]
    });
  }

  submitHandler(formDirective: FormGroupDirective) {
    console.log(this.myForm.value);
    this.service.postRegister(this.myForm.value).subscribe(
      (response: any) => {
        if (response.succeeded)
        this.myForm.reset();
        formDirective.resetForm();
      },
      err => { console.log(err); }
    );
  }

  get FirstName() {
    return this.myForm.get('FirstName');
  }

  get LastName() {
    return this.myForm.get('LastName');
  }

  get Email() {
    return this.myForm.get('Email');
  }

  get Password() {
    return this.myForm.get('Password');
  }

  getErrorMessageFirstName() {
    if (this.FirstName.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessageLastName() {
    if (this.LastName.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessageEmail() {
    if (this.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.Password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.Password.hasError('password') ? 'Not a valid password' : '';
  }
}
