import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  constructor(public router: Router) { }

  /**
   * Cambia la vista del sitio web según la ruta.
   * @param route: la ruta
   */
  goTo(route: string){
    this.router.navigateByUrl(route);
  }
  
}
