import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';
import * as bootstrap from 'bootstrap'
import { PostRequestService } from 'src/app/services/post-request.service';
import { Vehicle } from 'src/app/models/vehicle.model';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  carrier;
  disableReg: boolean=false;
  constructor(
    public main: TransportistaMainComponent,
    private postService: PostRequestService  
  ) { 
    this.carrier = this.main.carrier;
  }

  /*
  this.main.carrier.account_holder = this.account_holder?.value
    this.main.carrier.account_type = this.account_type?.value
    this.main.carrier.account_rut = this.account_rut?.value
    this.main.carrier.bank_id = this.bank_id?.value
    this.main.carrier.account_number = this.account_number?.value.toString();
  */ 

  ngOnInit(): void {    
  }

  newVehicle() {
    this.main.step$.next(4);
  }

  updateVehicle(vehicle:Vehicle, index:number){
   this.main.vehicle = vehicle;
   this.main.editableVehicleIndex = index;
   this.main.step$.next(4);
  }

  removeVehicle(index:any){
    this.main.carrier.vehicles.splice(index, 1);
  }

  back() {
    this.main.step$.next(5);
  }

  openSubmitedModal(){
    let submitedModal = new bootstrap.Modal(document.getElementById('submitedModal') as any, {
      keyboard: false
    })
    submitedModal?.show();
    this.disableReg=true
  }

  openTermsAndConditionsModal(){
    let temrsAndConditionModal = new bootstrap.Modal(document.getElementById('temrsAndConditionModal') as any, {
      keyboard: false
    })
    temrsAndConditionModal?.show();
  }

  submit() {
    
    this.postService.saveCarrierData(this.carrier).subscribe((res: any) => {
      console.log(res);
      this.openSubmitedModal();
      
    })
  }
}
