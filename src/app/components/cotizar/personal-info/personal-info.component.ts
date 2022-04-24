import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Input() serviceType: string | null = '';
  
  constructor(public main: ServiceMainComponent,
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
