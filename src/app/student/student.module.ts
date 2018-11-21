import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { SideNavBarComponent } from './components/student-dashboard/side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './components/student-dashboard/top-nav-bar/top-nav-bar.component';
import { TeacherCardListComponent } from './components/student-dashboard/teacher-card-list/teacher-card-list.component';
import { TeacherCardComponent } from './components/student-dashboard/teacher-card-list/teacher-card/teacher-card.component';
import { LocationComponent } from './components/student-dashboard/top-nav-bar/location/location.component';
import { SubjectComponent } from './components/student-dashboard/top-nav-bar/subject/subject.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StudentService } from './shared/services/student.service';
import { RequestComponent } from './components/student-dashboard/teacher-card-list/teacher-card/request/request.component';
import { LocationModalComponent } from './components/student-dashboard/teacher-card-list/teacher-card/request/location-modal/location-modal.component';
import { SubjectModalComponent } from './components/student-dashboard/teacher-card-list/teacher-card/request/subject-modal/subject-modal.component';
import { CommonService } from '../shared/services/common.service';
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MDBBootstrapModule,
  ],
  declarations: [
    StudentDashboardComponent, 
    SideNavBarComponent, 
    TopNavBarComponent, 
    TeacherCardListComponent, 
    TeacherCardComponent, 
    LocationComponent, 
    SubjectComponent, 
    RequestComponent, 
    LocationModalComponent, 
    SubjectModalComponent, 
    TutorProfileComponent,
  ],
  exports: [
    StudentDashboardComponent, 
    SideNavBarComponent, 
    TopNavBarComponent, 
    TeacherCardListComponent, 
    TeacherCardComponent, 
    LocationComponent, 
    SubjectComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StudentService,
    CommonService,
  ]
})
export class StudentModule { }
