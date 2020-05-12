import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootURL = 'https://localhost:5001/';
  loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }

  postLogin(formModel: FormGroup, formDirective: FormGroupDirective){
    return this.httpClient.post(this.rootURL + 'Users/login', formModel).subscribe(
      (response: any) => {
        if (response.succeeded)
        formModel.reset();
        formDirective.resetForm();
        localStorage.setItem('token', response.token);
        //localStorage.removeItem('token');
        this.router.navigateByUrl('/');
        this.toastr.success('You have been logged in', response.message, { positionClass: 'toast-top-right' } )
        this.setLogin(true);
      },
      errorResponse => {
       this.toastr.error(errorResponse.error.message, 'Login unsuccessful', { positionClass: 'toast-top-right' });
       this.setLogin(false);
      }
    );  
  }

  setLogin(status) {
    this.loginSubject.next(status);
  }

  isAuthenticated(): boolean{
    if (localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
}





