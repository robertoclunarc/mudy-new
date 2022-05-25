import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public main: TransportistaMainComponent,
    public utilsService: UtilsService
  ) {

    this.form = this.formBuilder.group({
      company_name: [this.main.carrier.company_name, [Validators.required, Validators.minLength(4)]],
      company_rut: [this.main.carrier.company_rut, [Validators.required]],
      company_phone: [this.main.carrier.company_phone, [Validators.required]],
      company_email: [this.main.carrier.company_email, [Validators.required, Validators.email]],
      company_address: [this.main.carrier.company_address, [Validators.required]],
    });

  }


  ngOnInit(): void { 
  }
 
  cancel() {
    this.utilsService.goTo('/partners')
  }

  next() {    
    this.main.carrier.company_name = this.company_name?.value;
    this.main.carrier.company_rut = this.company_rut?.value;
    this.main.carrier.company_phone = this.company_phone?.value;
    this.main.carrier.company_email = this.company_email?.value;
    this.main.carrier.company_address = this.company_address?.value;
    this.main.step$.next(2);
  }


  get company_name() {
    return this.form.get('company_name');
  }

  get company_rut() {
    return this.form.get('company_rut');
  }

  get company_phone() {
    return this.form.get('company_phone');
  }

  get company_email() {
    return this.form.get('company_email');
  }

  get company_address() {
    return this.form.get('company_address');
  }
}

