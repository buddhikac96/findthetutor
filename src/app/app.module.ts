import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginTutorComponent } from './components/login/login-tutor/login-tutor.component';
import { LoginStudentComponent } from './components/login/login-student/login-student.component';
import { RegisterTutorComponent } from './components/register/register-tutor/register-tutor.component';
import { RegisterStudentComponent } from './components/register/register-student/register-student.component';
import { AuthService } from './shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { RegisterService } from './shared/services/register.service';
import { StudentService } from './student/shared/services/student.service';
import { TutorService } from './tutor/shared/services/tutor-service.service';
import { BarRatingModule } from "ngx-bar-rating";
import { BlockUIModule } from 'ng-block-ui';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginTutorComponent,
    LoginStudentComponent,
    RegisterTutorComponent,
    RegisterStudentComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    BarRatingModule,
    BlockUIModule.forRoot()
  ],
  providers: [
    AuthService,
    RegisterService,
    StudentService,
    TutorService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
