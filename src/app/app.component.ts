import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'mudy-client';


 constructor(public router: Router){
 console.log(this.router.url);
 
 }


closeNavbar(){
  let navbar = new bootstrap.Collapse(document.getElementById('navbar') as any)
}

 onActivate(event:any) {
  window.scroll({ 
          top: 0, 
          left: 0,           
   });
}

 goTo(route: string){
  this.router.navigateByUrl(route)  
 }

 logrouter(){
  console.log(this.router.url);
   
 }
  
}
