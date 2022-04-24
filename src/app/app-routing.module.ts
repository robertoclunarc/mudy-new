import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceMainComponent } from './components/cotizar/service-main/service-main.component';
import { HomeMainComponent } from './components/landing-page/home-main/home-main.component';
import { PartnersComponent } from './components/landing-page/partners/partners.component';
import { ServiceTypeComponent } from './components/landing-page/service-type/service-type.component';

const routes: Routes = [
  {path: '',
   component: HomeMainComponent
  },
  {path: 'service',
   component: ServiceTypeComponent
  },
  {path: 'partners',
   component: PartnersComponent
  },
  {path: 'service/:serviceType',
   component: ServiceMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
