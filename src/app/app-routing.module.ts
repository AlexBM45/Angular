import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PanelGuard } from './panel/guard/panel.guard';

const routes: Routes = [
  { path: '', loadChildren: './portal/portal.module#PortalModule' },
  { path: 'panel', loadChildren: './panel/panel.module#PanelModule', canActivate: [PanelGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }