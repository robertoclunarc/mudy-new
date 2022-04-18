import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mudy-client';

   view = 'partners';

  ngOnInit(): void {
   
  }
  
changeView(view:string){
  this.view = view;
}
}
