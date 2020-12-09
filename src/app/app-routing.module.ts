import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './portal/portal.module#PortalModule' },
  { path: 'panel', loadChildren: './panel/panel.module#PanelModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }