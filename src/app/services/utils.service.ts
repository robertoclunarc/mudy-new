import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum Rut {
  valid = "valid",
  invalid = "invalid",
  incomplete = "incomplete"
}
@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  constructor(public router: Router) { }
/**
 * Valida si el digito verificador de un rut es válido
 * @param T rut
 * @returns dígito verificador.
 */
  validarRut(T: any) {
      
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;

    let digitoVerificador = S ? S - 1 : 'k';
    return digitoVerificador;
    
  }

  validDate(fecha: string){
    const toDate  = new Date();
    const dateForm = new Date(fecha);
    // Compara solo las fechas => no las horas!!
    toDate.setHours(0,0,0,0);
    return toDate <= dateForm;    
  }

  /**
   * Cambia la vista del sitio web según la ruta.
   * @param route: la ruta
   */
  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
