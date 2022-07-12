import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';
import { SelectsService } from 'src/app/services/selects.service';
import * as bootstrap from 'bootstrap'
import { PostRequestService } from 'src/app/services/post-request.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { Carrier } from 'src/app/models/carrier.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  carrier: any;
  carrierView: any;
  brands: any[] = [];
  vehicleTypes: any[] = [];
  banks: string="";
  disableReg: boolean=false;
  msjRegisterError: string[]=[];
  constructor(
    public main: TransportistaMainComponent,
    private postService: PostRequestService ,
    private selectService: SelectsService
  ) {  
    this.carrier = this.main.carrier;
  }  

  async ngOnInit() { 
    this.carrierView = this.main.carrier;     
    await this.ensambleVehicleBrands()  
  }

  async ensambleVehicleBrands(){
    await this.getBanks();
    await this.getVehicleBrands();
    await this.getVehicleTypes();
     for await (const [index, value] of this.carrier.vehicles.entries()){
      for await (const brand of this.brands){
        if (brand.id==value.vehicle_brand_id){
          this.carrierView.vehicles[index]= Object.assign(value, brand )
        }
      }
      for await (const tipo of this.vehicleTypes){
        if (tipo.idTipo==value.vehicle_type_id){
          this.carrierView.vehicles[index]= Object.assign(value, tipo )
        }
      }
     }
     //console.log(this.carrierView);
  }

  newVehicle() {
    this.main.step$.next(4);
  }

  async getVehicleBrands() {
    await this.selectService.getVehicleBrands()
     .toPromise()
     .then(res=>{
      this.brands = res.data;      
    })
  }

  async getVehicleTypes() {
    await this.selectService.getVehicleTypes()
    .toPromise()
    .then(res => {
      for (let tipo of res.data){
        this.vehicleTypes.push({idTipo: tipo.id, nameTipo: tipo.name})
      }      
    })
  }

  async getBanks() {
    await this.selectService.getBanks()
    .toPromise()
    .then(res=> {
      for (let bank of res.data){
        if (bank.id==this.carrier.bank_id)
          this.banks= bank.name
      }  
    })
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

  openMsjErrorModal(){
    let registerError = new bootstrap.Modal(document.getElementById('registerError') as any, {
      keyboard: false
    })
    registerError?.show();
  }

  openPasarelaPagoModal(){
    let pasarelaPago = new bootstrap.Modal(document.getElementById('pasarelaPagoModal') as any, {
      keyboard: false
    })
    pasarelaPago?.show();
  }

  submit() {
    
    this.postService.saveCarrierData(this.carrier).subscribe((res: any) => {
      console.log(res);
      //this.openSubmitedModal();<-----Activar al terminar la pasarela de pago
      
    }, ((error: HttpErrorResponse ) => {
      console.log(error.error) 
      //this.msjError(error.error);<-------- activar al terminar la pasarela de pago
      this.openSubmitedModal();//<-------- quitar al terminar la pasarela de pago
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
    this.msjRegisterError=msj;
    this.openMsjErrorModal();
  }
}
