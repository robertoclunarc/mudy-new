import { Component, OnInit } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap';
import { BehaviorSubject } from 'rxjs';
import { PostRequestService } from 'src/app/services/post-request.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-resume-mudanza',
  templateUrl: './resume-mudanza.component.html',
  styleUrls: ['./resume-mudanza.component.scss']
})
export class ResumeMudanzaComponent implements OnInit {
  idMoving: string ="-1"
  mudanza: any;
  mudanzaView: any;
  places: any[] = [];
  articles: any[] = [];
  buildings: any = [];
  disableReg: boolean=false;
  msjRegisterError: any[]=[];
  constructor(
    public main: ServiceMainComponent,
    private postService: PostRequestService ,
    private selectService: SelectsService
  ) {  
    this.mudanzaView = this.main.mudanza;
    
    this.mudanzaView.destination.building_destin= "";
    this.mudanzaView.origin.building_origin=""
  }  

  async ngOnInit() {
    console.log(this.main.articles)
    this.mudanza = this.main.mudanza; 
    
    await this.getBuildings();    
    await this.ensambleInventaryPlaces();
    await this.ensambleInventaryArticles();

    this.mudanzaView.destination.building_destin= this.buildings.find((p: any) => { return p.id ==this.mudanza.destination.building_id}).name;
    this.mudanzaView.origin.building_origin= this.buildings.find((p: any) => { return p.id ==this.mudanza.origin.building_id}).name

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
        //if (p.id !== 1 && p.id !== 8){
          this.places.push(p)
        //}     
      
    })
  }

  async getArticles() {
    /*await this.selectService.getArticles()
    .toPromise()
    .then((res: any) => {
      this.articles = res.data;
      
    })*/
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
    delete this.mudanza.origin.building_origin;
    delete this.mudanza.destination.building_destin
    
    this.postService.saveMovingData(this.mudanza).subscribe(res => {
      console.log(res);
      this.idMoving=res.data.id;
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