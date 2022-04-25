import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-best-services',
  templateUrl: './best-services.component.html',
  styleUrls: ['./best-services.component.scss']
})
export class BestServicesComponent implements OnInit {

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }


  goTo(route: string){
    this.utilsService.goTo(route)
   }
}
