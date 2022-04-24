import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  constructor(
    public main: TransportistaMainComponent,
    public utilsService: UtilsService) { }

ngOnInit(): void {
}

cancel(){
this.utilsService.goTo('/partners')
}

next(){
this.main.step2_OwnerInfo();
}
}

