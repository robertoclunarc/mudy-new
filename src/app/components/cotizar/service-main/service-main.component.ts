import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Moving } from 'src/app/models/moving.model';
import { Freight } from 'src/app/models/freight.model';
import { UtilsService } from 'src/app/services/utils.service';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.scss']
})
export class ServiceMainComponent implements OnInit {

  step$ = new BehaviorSubject(1);
  serviceType: string | null;
  mudanza = {} as Moving;
  flete = {} as Freight;
  origin = {} as Location
  destination = {} as Location;
  articles = [] as any;
  resumen: boolean= false;
  constructor(
    public utilsService: UtilsService,
    public actRoute: ActivatedRoute
    ) {
      let fleteView=JSON.parse(sessionStorage.getItem('fleteView') || '{}');
      let mudanzaView=JSON.parse(sessionStorage.getItem('mudanzaView') || '{}');
      if (mudanzaView.date){ this.resumen=true }      
      this.serviceType = this.actRoute.snapshot.paramMap.get('serviceType'); //Tipo de servicio (Mudanza o Flete)
  }

  ngOnInit(): void {  
  }


}