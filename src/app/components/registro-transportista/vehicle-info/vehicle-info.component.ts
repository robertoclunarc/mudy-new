import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/services/dummy';
import { SelectsService } from 'src/app/services/selects.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {


  brands: any[] = [];
  vehicleTypes: any[] = [];
  

  constructor(
    public main: TransportistaMainComponent,
    public selectService: SelectsService
  ) { }

  ngOnInit(): void {
    this.getVehicleBrands();
    this.getVehicleTypes();
  }

  getVehicleBrands() {
    this.selectService.getVehicleBrands().subscribe((res: any) => {
      this.brands = res.data;           
    })
  }

  getVehicleTypes() {
    this.selectService.getVehicleTypes().subscribe((res: any) => {
      this.vehicleTypes = res.data;           
    })
  }

  back() {
    this.main.step3_BankData();
  }

  next() {
    this.main.step5_VehicleDocuments();
  }
}
