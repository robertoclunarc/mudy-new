import { Component, OnInit } from '@angular/core';
import { PromotorMainComponent } from '../promotor-main/promotor-main.component';

@Component({
  selector: 'app-promotor-bank-data',
  templateUrl: './promotor-bank-data.component.html',
  styleUrls: ['./promotor-bank-data.component.scss']
})
export class PromotorBankDataComponent implements OnInit {

  constructor(
    public main: PromotorMainComponent,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step1_PromotorInfo();
  }

  next() {
    alert('Datos Registrados')
  }


}