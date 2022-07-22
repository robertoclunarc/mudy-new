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
    this.flete = this.main.flete
    
  }  

  async ngOnInit() { 
    console.log(this.flete);
    await this.getBuildings(); 
    await this.getVehicleTypes();

    //this.fleteView.destination.building_destin=await this.buildings.find((p: any) => { return p.id ==this.flete.destination.building_id});
    //this.fleteView.origin.building_origin= await this.buildings.find((p: any) => { return p.id ==this.flete.origin.building_id});
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
      this.fleteView.destination.building_destin= await this.buildings.find((p: any) => { return p.id ==this.flete.destination.building_id});
      this.fleteView.origin.building_origin= await  this.buildings.find((p: any) => { return p.id ==this.flete.origin.building_id});
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

    this.postService.saveFreightData(this.main.flete).subscribe(res => {
      console.log(res);
      this.openSubmitedModal();
      this.disableReg=false;
    }, ((error: HttpErrorResponse ) => {
      console.log(error.error) 
      this.msjError(error.error);
      this.disableReg=true;
    }));   
    
  }

  msjError(msjRegisterError: any){
    let msj: string[]=[];

    msj.push(msjRegisterError.message);
    
    if (msjRegisterError.errors.company_name!=undefined){
      msj.push(msjRegisterError.errors.company_name[0]);
    }
    if (msjRegisterError.errors.company_rut!=undefined){
      msj.push(msjRegisterError.errors.company_rut[0]);
    }
    if (msjRegisterError.errors.company_rut!=undefined){
      msj.push(msjRegisterError.errors.company_rut[0]);
    }
    if (msjRegisterError.errors.legal_rut!=undefined){
      msj.push(msjRegisterError.errors.legal_rut[0]);
    }
    if (msjRegisterError.errors.legal_email!=undefined){
      msj.push(msjRegisterError.errors.legal_rut[0]);
    }
    if (msjRegisterError.errors.account_type!=undefined){
      msj.push(msjRegisterError.errors.account_type[0]);
    }
    this.msjRegisterError=msj;
    this.openMsjErrorModal();
  }
}