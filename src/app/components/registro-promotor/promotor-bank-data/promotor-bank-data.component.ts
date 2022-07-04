import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostRequestService } from 'src/app/services/post-request.service';
import { SelectsService } from 'src/app/services/selects.service';
import { PromotorMainComponent } from '../promotor-main/promotor-main.component';
import * as bootstrap from 'bootstrap'
@Component({
  selector: 'app-promotor-bank-data',
  templateUrl: './promotor-bank-data.component.html',
  styleUrls: ['./promotor-bank-data.component.scss']
})
export class PromotorBankDataComponent implements OnInit {

  banks: any[] = [];
  form: FormGroup;
  constructor(
    public main: PromotorMainComponent,
    private formBuilder: FormBuilder,
    public selectService: SelectsService,
    private postService: PostRequestService
  ) {

    this.form = this.formBuilder.group({
      account_type: [this.main.promoter.account_type, [Validators.required]],
      bank_id: [this.main.promoter.bank_id, [Validators.required]],
      account_number: [this.main.promoter.account_number, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks() {
    this.selectService.getBanks().subscribe((res: any) => {
      this.banks = res.data;
    })
  }



  back() {
    this.main.step$.next(1);
  }

  successModal(){
    let dataSaved = new bootstrap.Modal(document.getElementById('dataSaved') as any, {
      keyboard: false
    })
    dataSaved?.show();
  }

  next() {
    this.main.promoter.account_type = this.account_type?.value
    this.main.promoter.bank_id = this.bank_id?.value
    this.main.promoter.account_number = this.account_number?.value
    this.postService.savePromoterData(this.main.promoter).subscribe(res =>{        
      this.successModal()  
    })    
  }

  get account_type() {
    return this.form.get('account_type');
  }
  get bank_id() {
    return this.form.get('bank_id');
  }
  get account_number() {
    return this.form.get('account_number');
  }
}