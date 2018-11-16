import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TutorEditProfileComponent } from './components/tutor-edit-profile/tutor-edit-profile.component';
import { TutorHomeComponent } from './components/tutor-home/tutor-home.component';
import { TutorService } from './shared/services/tutor-service.service';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    TutorDashboardComponent,
    TutorProfileComponent,
    TutorEditProfileComponent,
    TutorHomeComponent,
  ],
  exports: [
    TutorDashboardComponent,
    TutorProfileComponent,
    TutorEditProfileComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    TutorService
  ]
})
export class TutorModule { }
