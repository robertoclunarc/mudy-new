import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/services/dummy';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  vehicles = Vehicles;
  largo = 0;
  ancho = 0;
  alto = 0;

  constructor(
    public main: TransportistaMainComponent,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step3_BankData();
  }

  next() {
    this.main.step5_VehicleDocuments();
  }
}
