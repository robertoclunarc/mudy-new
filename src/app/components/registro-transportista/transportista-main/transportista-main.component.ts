import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-transportista-main',
  templateUrl: './transportista-main.component.html',
  styleUrls: ['./transportista-main.component.scss']
})
export class TransportistaMainComponent implements OnInit {

  step1: boolean = false;
  step1_check: boolean = false;
  step2: boolean = false;
  step2_check: boolean = false;
  step3: boolean = false;
  step3_check: boolean = false;
  step4: boolean = false;
  step4_check: boolean = false;
  step5: boolean = false;
  step5_check: boolean = false;
  step6: boolean = false;
  step6_check: boolean = false;

  constructor(
    public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.step6_Resume();
  }

  /**
   *  Con variables booleanas se valida en que paso del registro va el usuario.
   *  step: valida que el usuario está en ese paso.
   *  step_checked: valida que el usuario completó ese paso.  
   */


  /**
  * Paso 1: Información de la empresa.
  */
  step1_CompanyInfo() {
    this.step1 = true;
    this.step1_check = false;
    this.step2 = false;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
    this.step5 = false;
    this.step5_check = false;
    this.step6 = false;
    this.step6_check = false;
  }


  /**
  * Paso 2: Información del representante legal.
  */
  step2_OwnerInfo() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
    this.step5 = false;
    this.step5_check = false;
    this.step6 = false;
    this.step6_check = false;
  }

  /**
  * Paso 3: Información de banco.
  */
  step3_BankData() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
    this.step5 = false;
    this.step5_check = false;
    this.step6 = false;
    this.step6_check = false;
  }


  /**
  * Paso 4: Datos del vehículo.
  */
  step4_VehicleInfo() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = true;
    this.step4 = true;
    this.step4_check = false;
    this.step5 = false;
    this.step5_check = false;
    this.step6 = false;
    this.step6_check = false;
  }

  /**
  * Paso 5: Papeles del vehículo.
  */
  step5_VehicleDocuments() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = true;
    this.step4 = true;
    this.step4_check = true;
    this.step5 = true;
    this.step5_check = true;
    this.step6 = true;
    this.step6_check = false;
  }

  /**
* Paso 6: Resumen del Registro.
*/
  step6_Resume() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = true;
    this.step4 = true;
    this.step4_check = true;
    this.step5 = true;
    this.step5_check = true;
    this.step6 = true;
    this.step6_check = false;
  }

  /**
* Enviar registro
*/
  submit() {
    this.step1_CompanyInfo()
    this.utilsService.goTo('/')
  }

}
