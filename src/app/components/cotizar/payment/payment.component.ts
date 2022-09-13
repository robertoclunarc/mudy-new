import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { PostRequestService } from 'src/app/services/post-request.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Oneclick,Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes  } from 'transbank-sdk';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnChanges {
  
  stripePayment= {return_url: 'http://mudy.itsirius.com/'};
  dataPayment:{ url?: any, token_ws?:any } = {};
  @Input() idMoving: string = "-1";
  @ViewChild('startForm') startForm!: ElementRef;
  goTo: boolean=false;
  constructor(
    private postService: PostRequestService,
    private http: HttpClient,
    ) {  }  

  async ngOnChanges() { 
    if (this.idMoving!="-1"){
      await this.payment(this.idMoving)
    }
  }  

  async payment(id: string) {
    
    await this.postService.payment(this.stripePayment, id)
    .then(res => {
      this.dataPayment={
        url:res.data.url,
        token_ws: res.data.token,
      }
      if (this.dataPayment.url!=undefined){
        this.goTo=true
      }
      else{
        this.goTo=false
      }

      console.log(this.dataPayment)
    })
  }
  
  async onSubmit(event: Event){    
    console.log(this.idMoving);
    if (this.goTo){
      console.log(`post: ${this.stripePayment} / url: ${this.dataPayment.url} / token:${this.dataPayment.token_ws}`)
      this.startForm.nativeElement.submit();
    }
  }  
}
