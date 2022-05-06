import { Component, OnInit } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-transportista-bank-data',
  templateUrl: './transportista-bank-data.component.html',
  styleUrls: ['./transportista-bank-data.component.scss']
})
export class TransportistaBankDataComponent implements OnInit {

  banks: any[] = [];

  constructor(
    public main: TransportistaMainComponent,
    public selectService: SelectsService
  ) { }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks() {
    this.selectService.getBanks().subscribe((res: any) => {
      this.banks = res.data;
    })
  }

  back() {
    this.main.step2_OwnerInfo();
  }

  next() {
    this.main.step4_VehicleInfo();
  }
}
