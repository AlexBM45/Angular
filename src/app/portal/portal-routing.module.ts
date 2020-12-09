import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsComponent } from './components/us/us.component';
import { HomeComponent } from './components/home/home.component';
import { PortalComponent } from './portal.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'us', component: UsComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
