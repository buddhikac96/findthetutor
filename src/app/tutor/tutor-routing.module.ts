import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TutorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
