import { Component, OnInit } from '@angular/core';
import { PostRequestService } from 'src/app/services/post-request.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
  stripePayment= {return_url: 'https://mudy.netlify.app/quotation/payment'};
  dataPayment:{ url?: any, token?:any } = {};
  
  
  constructor(private postService: PostRequestService) { this.payment() }  

  ngOnInit(): void {
    
  }  

  async payment() {
    
    await this.postService.payment(this.stripePayment)
    .then(res => {
      this.dataPayment={
        url:res.data.url,
        token: res.data.token,
      }
    })
  }  
}
