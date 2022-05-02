import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
