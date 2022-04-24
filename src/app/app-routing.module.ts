import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceMainComponent } from './components/cotizar/service-main/service-main.component';
import { HomeMainComponent } from './components/landing-page/home-main/home-main.component';
import { PartnersComponent } from './components/landing-page/partners/partners.component';
import { ServiceTypeComponent } from './components/landing-page/service-type/service-type.component';
import { PromotorMainComponent } from './components/registro-promotor/promotor-main/promotor-main.component';
import { TransportistaMainComponent } from './components/registro-transportista/transportista-main/transportista-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent
  },
  {
    path: 'service',
    component: ServiceTypeComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'service/:serviceType',
    component: ServiceMainComponent
  },
  {
    path: 'transportista',
    component: TransportistaMainComponent
  },
  {
    path: 'promotor',
    component: PromotorMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
