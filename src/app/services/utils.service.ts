import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  $roomModal = new EventEmitter<any>(); // Observable booleano que indica si la modal está abierta o cerrada

  constructor(public router: Router) { }


  /**
   * Cambia la vista del sitio web según la ruta.
   * @param route: la ruta
   */
  goTo(route: string){
    this.router.navigateByUrl(route);
  }
  
}
