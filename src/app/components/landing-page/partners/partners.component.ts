import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partnerType: string = ''; 

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }


  goTo(route:string){
    this.utilsService.goTo(route);
  }

/**
 * Mostrar contenido del botón de servicio según el valor del paramentro
 * @param partner 
 */
  showButtonContent(partner: string){   
   if(partner == 'transportista'){
     this.partnerType = 'transportista'
   }
   
   if(partner == 'promotor'){
    this.partnerType = 'promotor'
   }

   if(partner == ''){
    this.partnerType = ''
   }
  }


}
