import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectsService } from 'src/app/services/selects.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  form: FormGroup;
  brands: any[] = [];
  vehicleTypes: any[] = [];
  vehicleType = 1;

  constructor(
    private formBuilder: FormBuilder,
    public main: TransportistaMainComponent,
    public selectService: SelectsService
  ) {
    this.form = this.formBuilder.group({
      vehicle_type_id: [this.vehicleType, [Validators.required]],
      vehicle_brand_id: ['', [Validators.required]],
      model: ['', [Validators.required]],
      patente: ['', [Validators.required]],
      hidraulic_elevator: [null, [Validators.required]],
      long: [1, [Validators.required]],
      width: [1, [Validators.required]],
      high: [1, [Validators.required]]      
    });
  }

  ngOnInit(): void {
    this.getVehicleBrands();
    this.getVehicleTypes();
  }


  metrosCubicos(){
    let metrosCubicos = this.long?.value * this.width?.value * this.high?.value;
    return metrosCubicos;
  }

  changeVehicleType(){
    this.vehicle_type_id?.setValue(this.vehicleType);   
  }
  
  changeHidraulic(){
    this.hidraulic_elevator?.setValue(JSON.parse(this.hidraulic_elevator.value))     
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
    this.main.step$.next(3)
  }

  next() {
    this.main.vehicle.vehicle_type_id = this.vehicle_type_id?.value;
    this.main.vehicle.vehicle_brand_id = this.vehicle_brand_id?.value;
    this.main.vehicle.model = this.model?.value;
    this.main.vehicle.patente = this.patente?.value;
    this.main.vehicle.hidraulic_elevator = this.hidraulic_elevator?.value;
    this.main.vehicle.long = this.long?.value;
    this.main.vehicle.width = this.width?.value;
    this.main.vehicle.high = this.high?.value;
    this.main.step$.next(5);
  }


  get vehicle_type_id() {
    return this.form.get('vehicle_type_id');
  }
  get vehicle_brand_id() {
    return this.form.get('vehicle_brand_id');
  }
  get model() {
    return this.form.get('model');
  }
  get patente() {
    return this.form.get('patente');
  }
  get hidraulic_elevator() {
    return this.form.get('hidraulic_elevator');
  }
  get long() {
    return this.form.get('long');
  }
  get width() {
    return this.form.get('width');
  }
  get high() {
    return this.form.get('high');
  }  
}
