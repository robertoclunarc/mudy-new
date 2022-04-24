import { Component, OnInit } from '@angular/core';
import { ServiceMainComponent } from '../service-main/service-main.component';


@Component({
  selector: 'app-inventory-flete',
  templateUrl: './inventory-flete.component.html',
  styleUrls: ['./inventory-flete.component.scss']
})
export class InventoryFleteComponent implements OnInit {

 
  vehicles = [
    { name: 'Moto', img: 'https://media.zigcdn.com/media/model/2019/Sep/650nk-right-side-view_360x240.jpg' },
    { name: 'Camioneta Pickup', img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/01/20200115-VOLKSWAGEN-TAREK-PICK-UP-2021-REGISTROS-03.jpg' },
    { name: 'Furgon', img: 'https://www.ecured.cu/images/f/fd/Nv200.jpg' },
    { name: 'Mini Camión Cerrado', img: 'https://autoline.ng/img/s/truck-box-truck-HYUNDAI-HD78---1542566263506607756_big--18111820371972388000.jpg' },
  ]

  selectedVehicle: string = '';

  constructor(public main: ServiceMainComponent,
  ) { }

  ngOnInit(): void {

  }

  selectVehicle(vehicle: string) {
    this.selectedVehicle = vehicle;
  }

  next() {
    alert('Método de pago')
  }

  back() {
    this.main.step3_ToAddress();
  }


}