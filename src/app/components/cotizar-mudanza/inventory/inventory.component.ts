import { Component, OnInit } from '@angular/core';
import { MovingMainComponent } from '../moving-main/moving-main.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  rooms = ['Cocina', 'Logia', 'Sala', 'Sala', 'Terraza', 'Otro']

  constructor(public main: MovingMainComponent) { }

  ngOnInit(): void {
  }

  next(){
    alert('Método de pago')
  }
  
  back(){
    this.main.step3_ToAddress();
  }

}
