import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-inventory-mudanza',
  templateUrl: './inventory-mudanza.component.html',
  styleUrls: ['./inventory-mudanza.component.scss']
})
export class InventoryMudanzaComponent implements OnInit {

  rooms = ['Cocina', 'Logia', 'Sala', 'Sala', 'Terraza', 'Otro']
  roomModalOpened = false;

  constructor(public main: ServiceMainComponent,
             public utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.$roomModal.subscribe((value)=>{this.roomModalOpened = value})
  }

  next(){
    alert('Método de pago')
  }
  
  back(){
    this.main.step3_ToAddress();
  }

  openRoomModal(){
    console.log(this.roomModalOpened);
    
    this.roomModalOpened = true;
  }

}
