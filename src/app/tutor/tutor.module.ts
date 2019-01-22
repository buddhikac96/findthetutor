import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TutorService } from './shared/services/tutor-service.service';
import { CommonService } from '../shared/services/common.service';
import { RequestsComponent } from './components/tutor-dashboard/requests/requests.component';
import { StatsComponent } from './components/tutor-dashboard/stats/stats.component';
import { TutorProfileComponent } from './components/profile/profile.component';
import { TutorProfileEditComponent } from './components/profile/edit/edit.component';
import { DistrictChartComponent } from './components/tutor-dashboard/stats/district-chart/district-chart.component';
import { SubjectChartComponent } from './components/tutor-dashboard/stats/subject-chart/subject-chart.component';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    MDBBootstrapModule,
    FloatingActionMenuModule,
  ],
  declarations: [
    TutorDashboardComponent,
    RequestsComponent,
    StatsComponent,
    TutorProfileComponent,
    TutorProfileEditComponent,
    DistrictChartComponent,
    SubjectChartComponent,
  ],
  exports: [
    TutorDashboardComponent,
    TutorProfileComponent,
    TutorProfileEditComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    TutorService,
    CommonService
  ]
})
export class TutorModule { }
