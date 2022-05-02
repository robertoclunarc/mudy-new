import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public utils: UtilsService) { }

  ngOnInit(): void {
  }

  goTo(route: string){
    this.utils.goTo(route)
   }

}
