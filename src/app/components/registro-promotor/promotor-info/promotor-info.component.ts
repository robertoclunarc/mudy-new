import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { PromotorMainComponent } from '../promotor-main/promotor-main.component';

@Component({
  selector: 'app-promotor-info',
  templateUrl: './promotor-info.component.html',
  styleUrls: ['./promotor-info.component.scss']
})
export class PromotorInfoComponent implements OnInit {

  constructor(
    public main: PromotorMainComponent,
    public utilsService: UtilsService) { }

ngOnInit(): void {
}

cancel(){
this.utilsService.goTo('/partners')
}

next(){
this.main.step2_BankData();
}
}