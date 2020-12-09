import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
