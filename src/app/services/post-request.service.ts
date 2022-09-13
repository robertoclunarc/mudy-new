import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carrier } from '../models/carrier.model';
import { Freight } from '../models/freight.model';
import { Moving } from '../models/moving.model';
import { Promoter } from '../models/promoter.model';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  constructor(private http: HttpClient) { }

  saveCarrierData(carrier: Carrier) {
    console.log(carrier);
       
    return this.http.post<any>(
      environment.baseUrl + environment.carrier, carrier,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  savePromoterData(promoter: Promoter) {
    console.log(promoter);
       
    return this.http.post<any>(
      environment.baseUrl + environment.promoter, promoter,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  saveFreightData(freight: Freight) {
    console.log(freight);
       
    return this.http.post<any>(
      environment.baseUrl + environment.freight, freight,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  saveMovingData(moving: Moving) {
    console.log(moving);
       
    return this.http.post<any>(
      environment.baseUrl + environment.movings, moving,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  paymentConfirmation() {        
    return this.http.get<any>(
      environment.baseUrl + environment.confirm,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  pagar(stripePayment: {return_url: string}) {        
    return this.http.post<any>(
      environment.baseUrl + environment.payment, stripePayment,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'       
        }
      });
  }

  async payment(stripePayment: {return_url: string}, id: string): Promise<any> {
    const url: string = `${environment.baseUrl}${environment.payment}${id}`
    return await this.http.post<any>(url, stripePayment).toPromise();    
    
  }
 
}
