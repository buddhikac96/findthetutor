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
import { AuthGaurd } from './shared/services/authguard.service';
import { TutorAuthGuard } from './shared/services/tutorAuthGuard.service';
import { StudentAuthGuard } from './shared/services/studentAuthGuard.service';
import { VerificationComponent } from './components/shared/verification/verification.component';


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
        path: 'verify',
        component: VerificationComponent
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
        loadChildren: './tutor/tutor.module#TutorModule',
        canActivate: [AuthGaurd, TutorAuthGuard]
    },
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule',
        canActivate: [AuthGaurd, StudentAuthGuard]
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