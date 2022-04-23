import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { BestServicesComponent } from './components/landing-page/best-services/best-services.component';
import { WeAreMudyComponent } from './components/landing-page/we-are-mudy/we-are-mudy.component';
import { InterestComponent } from './components/landing-page/interest/interest.component';
import { ClientsCommentsComponent } from './components/landing-page/clients-comments/clients-comments.component';
import { ContactUsComponent } from './components/landing-page/contact-us/contact-us.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { ServiceTypeComponent } from './components/landing-page/service-type/service-type.component';
import { PartnersComponent } from './components/landing-page/partners/partners.component';
import { PersonalInfoComponent } from './components/cotizar-mudanza/personal-info/personal-info.component';
import { OriginAddressComponent } from './components/cotizar-mudanza/origin-address/origin-address.component';
import { ToAddressComponent } from './components/cotizar-mudanza/to-address/to-address.component';
import { InventoryComponent } from './components/cotizar-mudanza/inventory/inventory.component';
import { RoomModalComponent } from './components/cotizar-mudanza/room-modal/room-modal.component';
import { PaymentComponent } from './components/cotizar-mudanza/payment/payment.component';
import { MovingMainComponent } from './components/cotizar-mudanza/moving-main/moving-main.component';
import { HomeMainComponent } from './components/landing-page/home-main/home-main.component';
import { FleteMainComponent } from './components/cotizar-flete/flete-main/flete-main.component';
import { PersonalInfoFleteComponent } from './components/cotizar-flete/personal-info-flete/personal-info-flete.component';
import { OriginAddressFleteComponent } from './components/cotizar-flete/origin-address-flete/origin-address-flete.component';
import { ToAddressFleteComponent } from './components/cotizar-flete/to-address-flete/to-address-flete.component';
import { InventoryFleteComponent } from './components/cotizar-flete/inventory-flete/inventory-flete.component';
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
    PartnersComponent,
    PersonalInfoComponent,
    OriginAddressComponent,
    ToAddressComponent,
    InventoryComponent,
    RoomModalComponent,
    PaymentComponent,
    MovingMainComponent,
    HomeMainComponent,
    FleteMainComponent,
    PersonalInfoFleteComponent,
    OriginAddressFleteComponent,
    ToAddressFleteComponent,
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
