import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectsService } from 'src/app/services/selects.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-to-address',
  templateUrl: './to-address.component.html',
  styleUrls: ['./to-address.component.scss']
})
export class ToAddressComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});
  buildings: any = [];
  constructor(
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    public main: ServiceMainComponent,
    public selectService: SelectsService
  ) {

  }

  ngOnInit(): void {
    this.main.destination.latitude = -33.4529519;
    this.main.destination.longitud = -70.7563284;
    this.form = this.formBuilder.group({
      city: [this.main.destination.city, [Validators.required]],
      comuna: [this.main.destination.comuna, [Validators.required]],
      building_id: [this.main.destination.building_id],
      address: [this.main.destination.address, [Validators.required]],
      condominium: [this.main.destination.condominium, [Validators.required]],
      house: [this.main.destination.condominium, [Validators.required]],
      latitude: [this.main.destination.latitude],
      longitud: [this.main.destination.longitud],
      parking_available: [this.main.destination.parking_available, [Validators.required]],
      elevator_available: [this.main.destination.elevator_available, [Validators.required]],
    });
    this.getBuildings();
  }

  changeParkingAvailable(){
    this.parking_available?.setValue(JSON.parse(this.parking_available?.value));    
  }

  changeElevatorAvailable(){
    if(this.building_id?.value == '1'){
      this.elevator_available?.setValue(false); 
     }  

    if(this.elevator_available?.value){
     this.elevator_available?.setValue(JSON.parse(this.elevator_available?.value)); 
    }    
       
  }

  next() {
    this.main.destination = this.form.value;
    this.main.step$.next(4);
  }

  back() {
    this.main.step$.next(2);
  }

  getBuildings() {
    this.selectService.getBuildings().subscribe((res: any) => {
      this.buildings = res.data;
    })
  }

  map() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=chile,${this.city?.value},${this.comuna?.value},${this.address?.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  }

  get city() {
    return this.form.get('city');
  }
  get comuna() {
    return this.form.get('comuna');
  }
  get address() {
    return this.form.get('address');
  }
  get building_id() {
    return this.form.get('building_id');
  }
  get condominium() {
    return this.form.get('condominium');
  }
  get house() {
    return this.form.get('house');
  }
  get latitude() {
    return this.form.get('latitude');
  }
  get longitud() {
    return this.form.get('longitud');
  }
  get parking_available() {
    return this.form.get('parking_available');
  }
  get elevator_available() {
    return this.form.get('elevator_available');
  }
}
