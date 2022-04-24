import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-promotor-main',
  templateUrl: './promotor-main.component.html',
  styleUrls: ['./promotor-main.component.scss']
})
export class PromotorMainComponent implements OnInit {

  step1: boolean = false;
  step1_check: boolean = false;
  step2: boolean = false;
  step2_check: boolean = false;
  

  constructor(
    public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.step1_PromotorInfo();
  }

  /**
   *  Con variables booleanas se valida en que paso del registro va el usuario.
   *  step: valida que el usuario está en ese paso.
   *  step_checked: valida que el usuario completó ese paso.  
   */


  /**
  * Paso 1: Datos Personales del Promotor.
  */
  step1_PromotorInfo() {
    this.step1 = true;
    this.step1_check = false;
    this.step2 = false;
    this.step2_check = false;
  
  }


  /**
  * Paso 2: Datos bancarios del promotor.
  */
  step2_BankData() {
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = false;    
  }


    
    /**
* Enviar registro
*/
submit() {
  this.step1_PromotorInfo()
  this.utilsService.goTo('/')
}

}
