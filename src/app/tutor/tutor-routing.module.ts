import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { TutorEditProfileComponent } from './components/tutor-edit-profile/tutor-edit-profile.component';
import { TutorHomeComponent } from './components/tutor-home/tutor-home.component';

const routes: Routes = [
  {
    path: '',
    component: TutorHomeComponent,
    children: [
      {path: 'dashboard', component: TutorDashboardComponent},
      {path: 'edit-profile',component: TutorEditProfileComponent},
    ]
  }
  // },
  // {
  //   path: 'profile',
  //   component: TutorProfileComponent,
  // },
  // {
  //   path: 'edit-profile',
  //   component: TutorEditProfileComponent
  // },
  // {
  //   path: 'dashboard',
  //   component: TutorDashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
