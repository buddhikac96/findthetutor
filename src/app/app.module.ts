import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChatModule } from 'ng-chat';

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
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PusherService } from './shared/services/pusher.service';
import { MessageComponent } from './components/shared/message/message.component';



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
    SpinnerComponent,
    FooterComponent,
    MessageComponent,
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
    BlockUIModule.forRoot(),
    NgChatModule,
  ],
  providers: [
    AuthService,
    RegisterService,
    StudentService,
    TutorService,
    PusherService,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports:[
    SpinnerComponent,
    MessageComponent
  ]
})
export class AppModule { }
