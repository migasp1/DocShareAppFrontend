import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  readonly rootURL = 'https://localhost:5001/';

  constructor(private httpClient: HttpClient){ 
    
  }

  postRegister(formModel: FormGroup) {
    return this.httpClient.post(this.rootURL + 'Users/register', formModel);  
  }


  

}
