import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTutorComponent } from './components/login/login-tutor/login-tutor.component';
import { LoginStudentComponent } from './components/login/login-student/login-student.component';
import { RegisterTutorComponent } from './components/register/register-tutor/register-tutor.component';
import { RegisterStudentComponent } from './components/register/register-student/register-student.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'loginStudent',
        component: LoginStudentComponent
    },
    {
        path: 'loginTutor',
        component: LoginTutorComponent
    },
    {
        path: 'registerTutor',
        component: RegisterTutorComponent
    },
    {
        path: 'registerStudent',
        component: RegisterStudentComponent
    },
    {
        path: 'tutor',
        loadChildren: './tutor/tutor.module#TutorModule'
    },
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];  

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }