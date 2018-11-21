import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
  },
  {
    path: 'tutor/:id',
    component: TutorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
