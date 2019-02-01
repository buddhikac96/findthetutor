import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { TutorProfileEditComponent } from './components/profile/edit/edit.component';
import { TutorProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/tutor-dashboard/stats/stats.component';
import { RequestsComponent } from './components/tutor-dashboard/requests/requests.component';
import { ForumComponent } from './components/tutor-dashboard/forum/forum.component';
import { AchievementsComponent } from './components/tutor-dashboard/achievements/achievements.component';
import { BoostComponent } from './components/tutor-dashboard/boost/boost.component';



const routes: Routes = [
  {
    path: '',
    component: TutorDashboardComponent,
    children: [
      {path:'', redirectTo: 'profile'},
      {path: 'requests',component:RequestsComponent},
      {path: 'achievements',component:AchievementsComponent},
      {path: 'profile',component:TutorProfileComponent},
      {path: 'learn',component:StatsComponent},
      {path: 'forum',component:ForumComponent},
      {path: 'boost',component:BoostComponent},
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
