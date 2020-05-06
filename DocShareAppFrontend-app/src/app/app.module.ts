import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms'
import{ ReactiveFormsModule } from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterloginComponent } from './registerlogin/registerlogin.component';
import { RegisterService } from './shared/register.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RegisterComponent,
    SearchBoxComponent,
    LoginComponent,
    RegisterloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule ,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
