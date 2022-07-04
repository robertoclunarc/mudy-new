import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//=============Libreria para Sliders=============
import { SwiperModule } from 'swiper/angular';

//=================Landing Page========================
import { HomeMainComponent } from './components/landing-page/home-main/home-main.component';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { BestServicesComponent } from './components/landing-page/best-services/best-services.component';
import { WeAreMudyComponent } from './components/landing-page/we-are-mudy/we-are-mudy.component';
import { InterestComponent } from './components/landing-page/interest/interest.component';
import { ClientsCommentsComponent } from './components/landing-page/clients-comments/clients-comments.component';
import { ContactUsComponent } from './components/landing-page/contact-us/contact-us.component';
import { ServiceTypeComponent } from './components/landing-page/service-type/service-type.component';
import { PartnersComponent } from './components/landing-page/partners/partners.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';

//=================Cotizar Mudanza/Flete=======================
import { ServiceMainComponent } from './components/cotizar/service-main/service-main.component';
import { PersonalInfoComponent } from './components/cotizar/personal-info/personal-info.component';
import { OriginAddressComponent } from './components/cotizar/origin-address/origin-address.component';
import { ToAddressComponent } from './components/cotizar/to-address/to-address.component';
import { PaymentComponent } from './components/cotizar/payment/payment.component';
import { InventoryMudanzaComponent } from './components/cotizar/inventory-mudanza/inventory-mudanza.component';
import { InventoryFleteComponent } from './components/cotizar/inventory-flete/inventory-flete.component';


//==============Registro de Transportista======================
import { TransportistaMainComponent } from './components/registro-transportista/transportista-main/transportista-main.component';
import { CompanyInfoComponent } from './components/registro-transportista/company-info/company-info.component';
import { OwnerInfoComponent } from './components/registro-transportista/owner-info/owner-info.component';
import { VehicleInfoComponent } from './components/registro-transportista/vehicle-info/vehicle-info.component';
import { VehicleDocumentsComponent } from './components/registro-transportista/vehicle-documents/vehicle-documents.component';
import { ResumeComponent } from './components/registro-transportista/resume/resume.component';
import { TransportistaBankDataComponent } from './components/registro-transportista/transportista-bank-data/transportista-bank-data.component';


//==============Registro de Promotor======================
import { PromotorMainComponent } from './components/registro-promotor/promotor-main/promotor-main.component';
import { PromotorInfoComponent } from './components/registro-promotor/promotor-info/promotor-info.component';
import { PromotorBankDataComponent } from './components/registro-promotor/promotor-bank-data/promotor-bank-data.component';
import { PoliciesAndPrivacyComponent } from './components/landing-page/policies-and-privacy/policies-and-privacy.component';
import { RegisterSuccessComponent } from './components/registro-transportista/register-success/register-success.component';
import { TransportistTermsConditionsComponent } from './components/registro-transportista/transportist-terms-conditions/transportist-terms-conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { UpdateVehicleInfoComponent } from './components/registro-transportista/update-vehicle-info/update-vehicle-info.component';
import { UpdateVehicleDocumentsComponent } from './components/registro-transportista/update-vehicle-documents/update-vehicle-documents.component'



const maskConfig: Partial<IConfig> = {
  validation: false  
};

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
    PaymentComponent,  
    ServiceMainComponent,
    InventoryMudanzaComponent,
    InventoryFleteComponent,    
    CompanyInfoComponent,
    OwnerInfoComponent,
    VehicleInfoComponent,
    VehicleDocumentsComponent,
    ResumeComponent,
    TransportistaMainComponent,
    PromotorMainComponent,
    PromotorInfoComponent,
    PromotorBankDataComponent,
    TransportistaBankDataComponent,
    PoliciesAndPrivacyComponent,
    RegisterSuccessComponent,
    TransportistTermsConditionsComponent,
    UpdateVehicleInfoComponent,
    UpdateVehicleDocumentsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig)     
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
