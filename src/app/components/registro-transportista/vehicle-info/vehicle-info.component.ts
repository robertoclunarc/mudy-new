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

  constructor(
    public main: TransportistaMainComponent,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step2_OwnerInfo();
  }

  next() {
    this.main.step4_VehicleDocuments();
  }
}
