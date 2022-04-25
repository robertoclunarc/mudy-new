import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }


  goTo(route: string){
    this.utilsService.goTo(route)
   }
}
