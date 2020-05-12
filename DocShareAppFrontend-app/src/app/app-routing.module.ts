import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { RegisterloginComponent } from './registerlogin/registerlogin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent },
  { path: 'registerLogin', component: RegisterloginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
