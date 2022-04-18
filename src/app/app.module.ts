import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { BestServicesComponent } from './components/best-services/best-services.component';
import { WeAreMudyComponent } from './components/we-are-mudy/we-are-mudy.component';
import { InterestComponent } from './components/interest/interest.component';
import { ClientsCommentsComponent } from './components/clients-comments/clients-comments.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { PartnersComponent } from './components/partners/partners.component';
@NgModule({
  declarations: [
    AppComponent,    
    HeroComponent,
    BestServicesComponent,
    WeAreMudyComponent,
    InterestComponent,
    ClientsCommentsComponent,
    ContactUsComponent,
    FooterComponent,
    ServiceTypeComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
