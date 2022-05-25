import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SelectsService } from 'src/app/services/selects.service';
import { ServiceMainComponent } from '../service-main/service-main.component';


@Component({
  selector: 'app-origin-address',
  templateUrl: './origin-address.component.html',
  styleUrls: ['./origin-address.component.scss']
})
export class OriginAddressComponent implements OnInit {

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
    this.main.origin.latitude = -33.4632207;
    this.main.origin.longitud = -70.6801927;
    this.form = this.formBuilder.group({
      city: [this.main.origin.city, [Validators.required]],
      comuna: [this.main.origin.comuna, [Validators.required]],
      building_id: [this.main.origin.building_id],
      address: [this.main.origin.address, [Validators.required]],
      condominium: [this.main.origin.condominium, [Validators.required]],
      house: [this.main.origin.condominium, [Validators.required]],
      latitude: [this.main.origin.latitude],
      longitud: [this.main.origin.longitud],
      parking_available: [this.main.origin.parking_available, [Validators.required]],
      elevator_available: [this.main.origin.elevator_available, [Validators.required]],
    });

    this.getBuildings();
  }

  next() {
    this.main.origin = this.form.value;
    this.main.step$.next(3);
  }

  back() {
    this.main.step$.next(1);
  }


  getBuildings(){
    this.selectService.getBuildings().subscribe((res: any) => {
      this.buildings = res.data;      
    })
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
