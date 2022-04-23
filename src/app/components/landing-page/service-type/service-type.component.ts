import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {

  serviceType: string = ''; //Indica si se ha hecho click en algún tipo de servicio

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }


  goTo(route:string){
    this.utilsService.goTo(route);
  }

/**
 * Mostrar contenido del botón de servicio según el valor del paramentro
 * @param service 
 */
  showButtonContent(service: string){   
   if(service == 'mudanza'){
     this.serviceType = 'mudanza'
   }
   
   if(service == 'flete'){
    this.serviceType = 'flete'
   }

   if(service == ''){
    this.serviceType = ''
   }
  }


}
