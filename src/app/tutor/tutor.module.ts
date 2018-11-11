import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    TutorRoutingModule
  ],
  declarations: [
    TutorDashboardComponent
  ],

  exports: [
    TutorDashboardComponent
  ]
})
export class TutorModule { }
