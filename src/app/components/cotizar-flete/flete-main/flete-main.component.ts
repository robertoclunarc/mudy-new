import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-flete-main',
  templateUrl: './flete-main.component.html',
  styleUrls: ['./flete-main.component.scss']
})
export class FleteMainComponent implements OnInit {

  step1: boolean = false;
  step1_check: boolean = false;
  step2: boolean = false;
  step2_check: boolean = false;
  step3: boolean = false;
  step3_check: boolean = false;
  step4: boolean = false;
  step4_check: boolean = false;

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
    this.step1_PersonalInfo();
  }

   
  step1_PersonalInfo(){
    this.step1 = true;
    this.step1_check = false;
    this.step2 = false;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }

  step2_OriginAddress(){
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = false;
    this.step3 = false;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }

  step3_ToAddress(){
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = false;
    this.step4 = false;
    this.step4_check = false;
  }

  step4_Inventory(){
    this.step1 = true;
    this.step1_check = true;
    this.step2 = true;
    this.step2_check = true;
    this.step3 = true;
    this.step3_check = true;
    this.step4 = true;
    this.step4_check = false;
  }

}