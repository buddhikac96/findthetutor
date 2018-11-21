import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TutorEditProfileComponent } from './components/tutor-edit-profile/tutor-edit-profile.component';
import { TutorHomeComponent } from './components/tutor-home/tutor-home.component';
import { TutorService } from './shared/services/tutor-service.service';
import { CommonService } from '../shared/services/common.service';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    TutorDashboardComponent,
    TutorEditProfileComponent,
    TutorHomeComponent,
  ],
  exports: [
    TutorDashboardComponent,
    TutorEditProfileComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    TutorService,
    CommonService
  ]
})
export class TutorModule { }
