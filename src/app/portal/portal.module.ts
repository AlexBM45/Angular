import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortalComponent } from './portal.component';
import { UsComponent } from './components/us/us.component';
import { CarouselComponent } from './extras/carousel/carousel.component';
import { CarouselItemComponent } from './extras/carousel-item/carousel-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PortalComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsComponent,
    CarouselComponent,
    CarouselItemComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
  ]
})
export class PortalModule { }
