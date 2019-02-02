import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

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
import { ReviewComponent } from './components/profile/review/review.component';
import { AchievementsComponent } from './components/tutor-dashboard/achievements/achievements.component';
import { AchieveComponent } from './components/tutor-dashboard/achievements/achieve/achieve.component';
import { MystudentsComponent } from './components/tutor-dashboard/mystudents/mystudents.component';
import { ForumComponent } from './components/tutor-dashboard/forum/forum.component';
import { RequestComponent } from './components/tutor-dashboard/requests/request/request.component';
import { NgChatModule } from 'ng-chat';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { BoostComponent } from './components/tutor-dashboard/boost/boost.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';


@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule,
    MDBBootstrapModule,
    FloatingActionMenuModule,
    NgChatModule,
    FormsModule,
    ReactiveFormsModule,
    JwSocialButtonsModule
  ],
  declarations: [
    TutorDashboardComponent,
    RequestsComponent,
    StatsComponent,
    TutorProfileComponent,
    TutorProfileEditComponent,
    DistrictChartComponent,
    SubjectChartComponent,
    ReviewComponent,
    AchievementsComponent,
    AchieveComponent,
    MystudentsComponent,
    ForumComponent,
    RequestComponent,
    BoostComponent,
  ],
  exports: [
    TutorDashboardComponent,
    TutorProfileComponent,
    TutorProfileEditComponent,
    ReviewComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    TutorService,
    CommonService,
  ]
})
export class TutorModule { }
