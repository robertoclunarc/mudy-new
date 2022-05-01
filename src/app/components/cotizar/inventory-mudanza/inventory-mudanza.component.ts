import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-inventory-mudanza',
  templateUrl: './inventory-mudanza.component.html',
  styleUrls: ['./inventory-mudanza.component.scss']
})
export class InventoryMudanzaComponent implements OnInit {

  rooms = ['Cocina', 'Logia', 'Sala','Terraza', 'Otro']

  
  constructor(public main: ServiceMainComponent,
             public utilsService: UtilsService) { }

  ngOnInit(): void {
   
  }

  next(){
    alert('Método de pago')
  }
  
  back(){
    this.main.step3_ToAddress();
  }


}
