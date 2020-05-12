import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  readonly rootURL = 'https://localhost:5001/';

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }

  postRegister(formModel: FormGroup, formDirective: FormGroupDirective) {
    return this.httpClient.post(this.rootURL + 'Users/register', formModel).subscribe(
      (response: any) => {
        if (response.succeeded) 
          formModel.reset();
          formDirective.resetForm();
          //Needs handle
          //this.router.navigateByUrl('login');
          this.toastr.success('An account has been created', 'Registration successful', { positionClass: 'toast-top-right' });      
      },
      errorResponse => {
        this.toastr.error(errorResponse.error.message, 'Registration unsuccessful', { positionClass: 'toast-top-right' });
      }
    );
  }





}
