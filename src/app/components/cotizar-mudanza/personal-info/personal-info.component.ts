import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { MovingMainComponent } from '../moving-main/moving-main.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(public main: MovingMainComponent,
              public utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  cancel(){
  this.utilsService.goTo('/service')
  }

  next(){
    this.main.step2_OriginAddress();
  }
}
