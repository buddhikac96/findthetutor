import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { TutorProfileEditComponent } from './components/profile/edit/edit.component';
import { TutorProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/tutor-dashboard/stats/stats.component';
import { RequestsComponent } from './components/tutor-dashboard/requests/requests.component';



const routes: Routes = [
  {
    path: '',
    component: TutorDashboardComponent,
    children: [
      {path:'', redirectTo: 'stat'},
      {path: 'stat',component: StatsComponent},
      {path: 'requests',component:RequestsComponent},
    ]
  },
  {
    path: 'profile',
    component: TutorProfileComponent,
    children: [
      {path: 'edit', component: TutorProfileEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
