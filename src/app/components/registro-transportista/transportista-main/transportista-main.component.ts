import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrier } from 'src/app/models/carrier.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-transportista-main',
  templateUrl: './transportista-main.component.html',
  styleUrls: ['./transportista-main.component.scss']
})
export class TransportistaMainComponent implements OnInit {


  step$ = new BehaviorSubject(1);
  carrier = {} as Carrier;
  vehicle = {} as Vehicle;
  editableVehicle = {} as Vehicle;
  
  constructor(
    public utilsService: UtilsService   
  ) {
    this.carrier.vehicles = [];

  }

  ngOnInit(): void {

  }

 


}
