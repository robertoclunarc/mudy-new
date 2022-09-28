import { Component, OnInit, Input } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
//import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap';
//import { BehaviorSubject } from 'rxjs';
import { PostRequestService } from 'src/app/services/post-request.service';
//import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cotizacion-flete',
  templateUrl: './cotizacion-flete.component.html',
  styleUrls: ['./cotizacion-flete.component.scss']
})
export class CotizacionFleteComponent implements OnInit {  
  
  flete: any;
  fleteView: any;
  vehicleTypes: any[] = [];
  buildings: any = [];
  disableReg: boolean=false;
  msjRegisterError: any[]=[];
  @Input() idCotizacion?: string;
  @Input() mensaje?: string  

  constructor(
    private router: Router,
    public main: ServiceMainComponent,
    private postService: PostRequestService ,
    private selectService: SelectsService
  ) {  
    this.fleteView = JSON.parse(sessionStorage.getItem('fleteView')  || '{}');    
    this.fleteView.origin.building_name='';
    this.fleteView.destination.building_name='';    
  }  

  async ngOnInit() { 
    sessionStorage.removeItem('fleteView');    
    this.flete=this.fleteView;
    await this.getBuildings(); 
    await this.getVehicleTypes();    
    this.flete.tipoVehiculo= await this.vehicleTypes.find((v: any)=> { return v.id==this.flete.vehicle_type_id}).name;
    
    this.msjError();

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
    this.router.navigate([`service`]);
  }
  
  goTo() {
    this.router.navigate([`/`]);
  }  

  openMsjErrorModal(){
    let registerError = new bootstrap.Modal(document.getElementById('registerError') as any, {
      keyboard: false
    })
    registerError?.show();
  }  

  msjError(){
    let msj: string[]=[];
    /*
    http://www.mudy.itsirius.com/6/successful
    http://www.mudy.itsirius.com/6/failed

    */
    if (this.mensaje=='successful'){
      this.msjRegisterError.push('Operación Exitosa!');
    }
    else{
      this.msjRegisterError.push('No se Completó la Operación!');
    }    
    this.openMsjErrorModal();
  }
}