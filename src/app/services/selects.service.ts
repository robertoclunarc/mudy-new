import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectsService {

  constructor(private http: HttpClient) { }


  getVehicleTypes() {
    return this.http.get<any>(environment.baseUrl + environment.vehicle_types);
  }

  getVehicleBrands() {
    return this.http.get<any>(environment.baseUrl + environment.vehicle_brands);
  }

  getBanks() {
    return this.http.get<any>(environment.baseUrl + environment.banks);
  }

  getBuildings() {
    return this.http.get<any>(environment.baseUrl + environment.buildings);
  }

  getCategories() {
    return this.http.get<any>(environment.baseUrl + environment.categories);
  }

  getArticles() {
    return this.http.get<any>(environment.baseUrl + environment.articles);
  }

  getPlaces() {
    return this.http.get<any>(environment.baseUrl + environment.places);
  }

}
