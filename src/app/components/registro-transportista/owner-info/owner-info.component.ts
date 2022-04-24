import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit {

  constructor(
    public main: TransportistaMainComponent,
    ) { }

ngOnInit(): void {
}

back(){
  this.main.step1_CompanyInfo();
}

next(){
this.main.step2_OwnerInfo();
}
}
