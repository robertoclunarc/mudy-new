import { Component, OnInit } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap';
import { BehaviorSubject } from 'rxjs';
import { PostRequestService } from 'src/app/services/post-request.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-resume-flete',
  templateUrl: './resume-flete.component.html',
  styleUrls: ['./resume-flete.component.scss']
})
export class ResumeFleteComponent implements OnInit {

  flete: any;
  fleteView: any;
  vehicleTypes: any[] = [];
  buildings: any = [];
  disableReg: boolean=false;
  msjRegisterError: any[]=[];
  constructor(
    public main: ServiceMainComponent,
    private postService: PostRequestService ,
    private selectService: SelectsService
  ) {  
    this.fleteView = this.main.flete
    this.fleteView.origin.building_name='';
    this.fleteView.destination.building_name='';
    
  }  

  async ngOnInit() { 
    this.flete = this.main.flete    
    
    await this.getBuildings(); 
    await this.getVehicleTypes();    
    this.flete.tipoVehiculo= await this.vehicleTypes.find((v: any)=> { return v.id==this.flete.vehicle_type_id}).name;    

  }

  async getVehicleTypes() {
   await  this.selectService.getVehicleTypes()
    .toPromise()
    .then((res: any) => {
      this.vehicleTypes = res.data;
      
    })
  }

  async getBuildings() {
    await this.selectService.getBuildings()
    .toPromise()
    .then(async (res: any) => {
      this.buildings = res.data;
      this.fleteView.destination.building_name= await this.buildings.find((p: any) => { return p.id ==this.flete.destination.building_id}).name;
      this.fleteView.origin.building_name= await  this.buildings.find((p: any) => { return p.id ==this.flete.origin.building_id}).name;
      
    })
  }

  
  back() {
    this.main.step$.next(3);
  }

  goTo(pag: number) {
    this.main.step$.next(pag);
  }

  openSubmitedModal(){
    let submitedModal = new bootstrap.Modal(document.getElementById('submitedModal') as any, {
      keyboard: false
    })
    submitedModal?.show();
    this.disableReg=true
  }  

  openMsjErrorModal(){
    let registerError = new bootstrap.Modal(document.getElementById('registerError') as any, {
      keyboard: false
    })
    registerError?.show();
  }

  submit() {
    delete this.flete.origin.building_name;
    delete this.flete.destination.building_name;
    delete this.flete.origin.elevator_available;
    delete this.flete.destination.elevator_available;
    this.postService.saveFreightData(this.flete).subscribe(res => {
      console.log(res);
      this.openSubmitedModal();
      this.disableReg=true;
    }, ((error: HttpErrorResponse ) => {
      console.log(error.error) 
      this.msjError(error.error);
      this.disableReg=false;
    }));   
    
  }

  msjError(msjRegisterError: any){
    let msj: string[]=[];

    msj.push(msjRegisterError.message);
    
    if (msjRegisterError.errors!=undefined){
      msj.push(msjRegisterError.errors);
    }
    
    this.msjRegisterError=msj;
    this.openMsjErrorModal();
  }
}