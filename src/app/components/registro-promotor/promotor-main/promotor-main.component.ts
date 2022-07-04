import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Promoter } from 'src/app/models/promoter.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-promotor-main',
  templateUrl: './promotor-main.component.html',
  styleUrls: ['./promotor-main.component.scss']
})
export class PromotorMainComponent implements OnInit {
  
  step$ = new BehaviorSubject(1);
  promoter = {} as Promoter;
  constructor(
    public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {  
  }

    


}
