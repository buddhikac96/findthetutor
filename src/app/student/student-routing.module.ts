import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';
import { TeacherCardListComponent } from './components/student-dashboard/teacher-card-list/teacher-card-list.component';
import { AllrequestsComponent } from './components/student-dashboard/allrequests/allrequests.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children: [
      {path: '', redirectTo: "teachers"},
      {path: "teachers", component: TeacherCardListComponent},
      {path: "allrequests", component: AllrequestsComponent},
    ]
  },
  {
    path: 'teachers/:id',
    component: TutorProfileComponent
  },
  {
    path: 'profile',
    component: StudentProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
