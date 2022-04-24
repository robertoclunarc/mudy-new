import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//=================Landing Page Components================
import { HomeMainComponent } from './components/landing-page/home-main/home-main.component';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { BestServicesComponent } from './components/landing-page/best-services/best-services.component';
import { WeAreMudyComponent } from './components/landing-page/we-are-mudy/we-are-mudy.component';
import { InterestComponent } from './components/landing-page/interest/interest.component';
import { ClientsCommentsComponent } from './components/landing-page/clients-comments/clients-comments.component';
import { ContactUsComponent } from './components/landing-page/contact-us/contact-us.component';
import { ServiceTypeComponent } from './components/landing-page/service-type/service-type.component';
import { PartnersComponent } from './components/landing-page/partners/partners.component';

//=================Cotizar Components================
import { ServiceMainComponent } from './components/cotizar/service-main/service-main.component';
import { PersonalInfoComponent } from './components/cotizar/personal-info/personal-info.component';
import { OriginAddressComponent } from './components/cotizar/origin-address/origin-address.component';
import { ToAddressComponent } from './components/cotizar/to-address/to-address.component';
import { RoomModalComponent } from './components/cotizar/room-modal/room-modal.component';
import { PaymentComponent } from './components/cotizar/payment/payment.component';
import { InventoryMudanzaComponent } from './components/cotizar/inventory-mudanza/inventory-mudanza.component';
import { InventoryFleteComponent } from './components/cotizar/inventory-flete/inventory-flete.component';


import { FooterComponent } from './components/landing-page/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AppComponent, 
    HomeMainComponent,   
    HeroComponent,
    BestServicesComponent,
    WeAreMudyComponent,
    InterestComponent,
    ClientsCommentsComponent,
    ContactUsComponent,
    FooterComponent,
    ServiceTypeComponent,
    PartnersComponent,
    PersonalInfoComponent,
    OriginAddressComponent,
    ToAddressComponent,  
    RoomModalComponent,
    PaymentComponent,  
    ServiceMainComponent,
    InventoryMudanzaComponent,
    InventoryFleteComponent
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
