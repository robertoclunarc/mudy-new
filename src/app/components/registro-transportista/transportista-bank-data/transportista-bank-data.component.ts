import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-transportista-bank-data',
  templateUrl: './transportista-bank-data.component.html',
  styleUrls: ['./transportista-bank-data.component.scss']
})
export class TransportistaBankDataComponent implements OnInit {

  constructor(
    public main: TransportistaMainComponent,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step2_OwnerInfo();
  }

  next() {
    this.main.step4_VehicleInfo();
  }
}
