import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partnerType: string = ''; //Indica si se ha hecho click en algún tipo de servicio
  constructor() { }

  ngOnInit(): void {
  }

/**
 * Mostrar contenido del botón de servicio según el valor del paramentro
 * @param service 
 */
  showButtonContent(service: string){   
   if(service == 'transportista'){
     this.partnerType = 'transportista'
   }
   
   if(service == 'promotor'){
    this.partnerType = 'promotor'
   }

   if(service == ''){
    this.partnerType = ''
   }
  }


}
