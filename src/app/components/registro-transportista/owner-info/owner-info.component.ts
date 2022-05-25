import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public main: TransportistaMainComponent,
    public utilsService: UtilsService
  ) {

    this.form = this.formBuilder.group({
      legal_first_name: [this.main.carrier.legal_first_name, [Validators.required, Validators.minLength(4)]],
      legal_last_name: [this.main.carrier.legal_last_name, [Validators.required, Validators.minLength(4)]],
      legal_rut: [this.main.carrier.legal_rut, [Validators.required]],
      legal_email: [this.main.carrier.legal_email, [Validators.required, Validators.email]],
      legal_phone: [this.main.carrier.legal_phone, [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  back() {
    this.main.step$.next(1);
  }

  next() {
    this.main.carrier.legal_first_name = this.legal_first_name?.value;
    this.main.carrier.legal_last_name = this.legal_last_name?.value;
    this.main.carrier.legal_rut = this.legal_rut?.value;
    this.main.carrier.legal_email = this.legal_email?.value;
    this.main.carrier.legal_phone = this.legal_phone?.value;    
    this.main.step$.next(3);
  }


  get legal_first_name() {
    return this.form.get('legal_first_name');
  }

  get legal_last_name() {
    return this.form.get('legal_last_name');
  }

  get legal_rut() {
    return this.form.get('legal_rut');
  }

  get legal_email() {
    return this.form.get('legal_email');
  }

  get legal_phone() {
    return this.form.get('legal_phone');
  }
}
