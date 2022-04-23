import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { MovingMainComponent } from '../moving-main/moving-main.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  rooms = ['Cocina', 'Logia', 'Sala', 'Sala', 'Terraza', 'Otro']
  roomModalOpened = false;

  constructor(public main: MovingMainComponent,
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
