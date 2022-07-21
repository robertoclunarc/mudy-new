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

  mudanza: any;
  mudanzaView: any;
  places: any[] = [];
  articles: any[] = [];
  disableReg: boolean=false;
  msjRegisterError: any[]=[];
  constructor(
    public main: ServiceMainComponent,
    private postService: PostRequestService ,
    private selectService: SelectsService
  ) {  
    this.mudanzaView = this.main.mudanza;
    this.mudanza = this.main.mudanza
  }  

  async ngOnInit() { 
    console.log(this.main.mudanza);
    await this.ensambleInventaryPlacesArticle();
   
  }

  async ensambleInventaryPlacesArticle(){
    await this.getPlaces();
    await this.getArticles();
    for await (const [index, value] of this.mudanzaView.inventory.entries()){
      for await (const p of this.places){
        //console.log(value.place_id);
        if (p.id ==value.place_id){          
          this.mudanzaView.inventory[index]= Object.assign(value, {plaza: p.name} )
        }        
      }
      for await (const [j, it] of value.items.entries()){
          for await (const ar of this.articles){
           // console.log(it);
            if (ar.id==it){              
              this.mudanzaView.inventory[index].items[j]= Object.assign(it, {articulo: ar.name} )
            }
          }
      }    
    }
     console.log(this.mudanzaView.inventory);
  }

  async getPlaces() {
    await this.selectService.getPlaces()
    .toPromise()
    .then(async (res: any) => {
      for await (const p of res.data)
        if (p.id !== 1 && p.id !== 8){
          this.places.push(p)
        }
      //this.places = res.data.filter((p: any) => { return p.id !== 1 && p.id !== 8 });
      console.log(res.data);
    })
  }

  async getArticles() {
    await this.selectService.getArticles()
    .toPromise()
    .then((res: any) => {
      this.articles = res.data;
      console.log(res.data);      
    })
  }

  
  back() {
    this.main.step$.next(4);
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

    this.postService.saveMovingData(this.main.mudanza).subscribe(res => {
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