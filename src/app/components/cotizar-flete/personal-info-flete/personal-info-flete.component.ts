import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { FleteMainComponent } from '../flete-main/flete-main.component';

@Component({
  selector: 'app-personal-info-flete',
  templateUrl: './personal-info-flete.component.html',
  styleUrls: ['./personal-info-flete.component.scss']
})
export class PersonalInfoFleteComponent implements OnInit {

  constructor(
    public main: FleteMainComponent,
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