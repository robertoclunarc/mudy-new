import { Component, OnInit, Input } from '@angular/core';
import { SelectsService } from '../../../services/selects.service';
//import { UtilsService } from '../../../services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap';
//import { BehaviorSubject } from 'rxjs';
import { PostRequestService } from '../../../services/post-request.service';
//import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion-mudanza',
  templateUrl: './cotizacion-mudanza.component.html',
  styleUrls: ['./cotizacion-mudanza.component.scss']
})

export class CotizacionMudanzaComponent implements OnInit {
  
  mudanza: any;
  mudanzaView: any;
  places: any[] = [];
  articles: any[] = [];
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
    this.mudanzaView = JSON.parse(sessionStorage.getItem('mudanzaView')  || '{}');
    
    this.mudanzaView.destination.building_destin= "";
    this.mudanzaView.origin.building_origin=""
  }  

  async ngOnInit() {
    sessionStorage.removeItem('mudanzaView');
    this.mudanza = this.mudanzaView; 
    
    await this.getBuildings();    
    await this.ensambleInventaryPlaces();
    await this.ensambleInventaryArticles();

    this.mudanzaView.destination.building_destin= this.buildings.find((p: any) => { return p.id ==this.mudanza.destination.building_id}).name;
    this.mudanzaView.origin.building_origin= this.buildings.find((p: any) => { return p.id ==this.mudanza.origin.building_id}).name;

    this.msjError();

  }  

  async ensambleInventaryPlaces(){
    await this.getPlaces();    
    for await (const [index, value] of this.mudanzaView.inventory.entries()){
      for await (const p of this.places){
        
        if (Number(p.id) == Number(value.place_id)){          
          this.mudanzaView.inventory[index].place_id =  p.id;
          this.mudanzaView.inventory[index].place_name =  p.name;
        }        
      }         
    }     
  }

  async ensambleInventaryArticles(){    
    await this.getArticles();
    for await (const [index, value] of this.mudanzaView.inventory.entries()){      
      for await (const [j, val] of value.items.entries()){
          for await (const ar of this.articles){
            
            if (ar.id==val){              
              this.mudanzaView.inventory[index].items[j]= Object.assign(val, {articulo: ar.name} )
            }
          }
      }    
    }     
  }

  async getPlaces() {
    await this.selectService.getPlaces()
    .toPromise()
    .then(async (res: any) => {
      for await (const p of res.data)        
          this.places.push(p)      
    })
  }

  async getArticles() {    
    this.articles= await this.main.articles
  }

  async getBuildings() {
    this.selectService.getBuildings()
    .toPromise()
    .then((res: any) => {
      this.buildings = res.data
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