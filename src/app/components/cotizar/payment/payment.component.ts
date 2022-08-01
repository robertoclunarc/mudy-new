import { Component, OnInit } from '@angular/core';
import { PostRequestService } from 'src/app/services/post-request.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
  stripePayment= {return_url: 'https://mudy.netlify.app/quotation/payment'};
  dataPayment:{ url?: any, token_ws?:any } = {};
  formPayment!: FormGroup;
  
  constructor(
    private postService: PostRequestService,
    private http: HttpClient,
    ) { this.buildForm(); this.payment() }  

  ngOnInit(): void {    
  }
  
  private buildForm() {
    this.formPayment = new FormGroup({
      token_ws: new FormControl('', [Validators.required]),      
    });

    this.formPayment.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  async payment() {
    
    await this.postService.payment(this.stripePayment)
    .then(res => {
      this.dataPayment={
        url:res.data.url,
        token_ws: res.data.token,
      }
      
    })
  }
  
  onSubmit(event: Event){
    
    this.formPayment.controls['token_ws'].setValue(this.dataPayment.token_ws)
    event.preventDefault();
    const value = this.formPayment.value;
    console.log(`url: ${this.dataPayment.url}`);
    console.log(value);
    this.http.post(this.dataPayment.url, {token_ws: value.token_ws} )
    .subscribe((result)=>{
      console.warn(`result: ${result}`);
      
    }, ((error: HttpErrorResponse ) => {
      console.log(error.error)       
      
    }));
    window.open(this.dataPayment.url, "_blank");
  }  
}
