import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rut, UtilsService } from 'src/app/services/utils.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit {
  isValidRut: Rut = Rut.incomplete;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public main: TransportistaMainComponent,
    public utilsService: UtilsService
  ) {

    this.form = this.formBuilder.group({
      legal_first_name: [this.main.carrier.legal_first_name, [Validators.required, Validators.minLength(4)]],
      legal_last_name: [this.main.carrier.legal_last_name, [Validators.required, Validators.minLength(4)]],
      legal_rut: [this.main.carrier.legal_rut, [Validators.required, Validators.minLength(9)]],
      legal_email: [this.main.carrier.legal_email, [Validators.required, Validators.email]],
      legal_phone: [this.main.carrier.legal_phone, [Validators.required]],
    });

  }

  ngOnInit(): void {
    let firstName: string;
    let lastName: string;
    
    if (this.main.carrier.company_name.indexOf(' ')>=0)
      firstName=this.main.carrier.company_name.substring(0, this.main.carrier.company_name.indexOf(' '));
    else
      firstName=this.main.carrier.company_name= this.main.carrier.company_name;
    lastName=this.main.carrier.company_name.substring(this.main.carrier.company_name.indexOf(' ')+1, this.main.carrier.company_name.length);
    this.legal_first_name?.setValue(firstName);
    this.legal_last_name?.setValue(lastName);
    this.legal_rut?.setValue(this.main.carrier.company_rut);
    this.legal_email?.setValue(this.main.carrier.company_email);
    this.legal_phone ?.setValue(this.main.carrier.company_phone);

    
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

  /**
  * It checks if the rut is valid by comparing the last digit of the rut with the result of the
  * function validarRut() from the UtilsService
  */
   validateRut() {
    if (this.legal_rut?.value && this.legal_rut?.value.length == 9) {

      let rutSinDigitoVerificador = this.legal_rut.value.slice(0, -1)
      let digitoVerificador = this.legal_rut.value[this.legal_rut.value.length - 1];
      let checkedDigitoVerificador = this.utilsService.validarRut(rutSinDigitoVerificador);

      if (digitoVerificador == checkedDigitoVerificador) {
        this.isValidRut = Rut.valid;
      } else {
        this.isValidRut = Rut.invalid;
      }

    } else {
      this.isValidRut = Rut.incomplete;
    }
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
