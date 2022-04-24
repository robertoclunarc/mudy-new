import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.scss']
})
export class ServiceMainComponent implements OnInit {

  step1: boolean = false;
  step1_check: boolean = false;
  step2: boolean = false;
  step2_check: boolean = false;
  step3: boolean = false;
  step3_check: boolean = false;
  step4: boolean = false;
  step4_check: boolean = false;

  serviceType: string | null;

  constructor(
    public utilsService: UtilsService,
    public actRoute: ActivatedRoute
    ) {

    this.serviceType = this.actRoute.snapshot.paramMap.get('serviceType'); //Tipo de servicio (Mudanza o Flete)
  }

  ngOnInit(): void {
    this.step4_Inventory();
  }

/**
 *  Con variables booleanas se valida en que paso de la cotización va el usuario.
 *  step: valida que el usuario está en ese paso.
 *  step_checked: valida que el usuario completó ese paso.  
 */


 /**
 * Paso 1: Información personal.
 */
  step1_PersonalInfo() {
    this.step1 = true;
    this.step1_check = false;
    this.step2 = false;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }


 /**
 * Paso 2: Dirección de Origen.
 */
  step2_OriginAddress() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }


 /**
 * Paso 3: Dirección de destino.
 */
  step3_ToAddress() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }

 /**
 * Paso 4: Inventario.
 */
  step4_Inventory() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = true;
    this.step4 = true;
    this.step4_check = false;
  }

}