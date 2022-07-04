import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService, Rut } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import { Moving } from 'src/app/models/moving.model';
import { Freight } from 'src/app/models/freight.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  isValidRut: Rut = Rut.incomplete;
  form: FormGroup = this.formBuilder.group({});
  currentDate:any;
  constructor(
    private formBuilder: FormBuilder,
    public main: ServiceMainComponent,
    public utilsService: UtilsService,
    private datePipe: DatePipe
    ) {     

      this.currentDate = this.datePipe.transform(Date.now(), 'yyyy-MM-dd')
  }

  ngOnInit(): void {
    /* Checking if the serviceType is mudanza or flete and then it is assigning the values to the form. */
    if(this.main.serviceType == 'mudanza'){
      this.form = this.formBuilder.group({
        first_name: [this.main.mudanza.first_name, [Validators.required, Validators.minLength(4)]],
        last_name: [this.main.mudanza.last_name, [Validators.required, Validators.minLength(4)]],
        rut: [this.main.mudanza.rut, [Validators.required, Validators.minLength(9)]],
        email: [this.main.mudanza.email, [Validators.required, Validators.email]],
        phone: [this.main.mudanza.phone, [Validators.required]],
        whatsapp: [this.main.mudanza.whatsapp, [Validators.required]],
        referral_code: [this.main.mudanza.referral_code],
        date: [this.main.mudanza.date, [Validators.required]],
        hour: [this.main.mudanza.hour, [Validators.required]]
      });
    }else{
      this.form = this.formBuilder.group({
        first_name: [this.main.flete.first_name, [Validators.required, Validators.minLength(4)]],
        last_name: [this.main.flete.last_name, [Validators.required, Validators.minLength(4)]],
        rut: [this.main.flete.rut, [Validators.required, Validators.minLength(9)]],
        email: [this.main.flete.email, [Validators.required, Validators.email]],
        phone: [this.main.flete.phone, [Validators.required]],
        whatsapp: [this.main.flete.whatsapp, [Validators.required]],
        referral_code: [this.main.flete.referral_code],
        date: [this.main.flete.date, [Validators.required]],
        hour: [this.main.flete.hour, [Validators.required]]
      });
    }
    
   this.validateRut()
  }

 /**
  * It checks if the rut is valid by comparing the last digit of the rut with the result of the
  * function validarRut() from the UtilsService
  */
  validateRut() {
    if (this.rut?.value && this.rut?.value.length == 9) {

      let rutSinDigitoVerificador = this.rut.value.slice(0, -1)
      let digitoVerificador = this.rut.value[this.rut.value.length - 1];
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

  
  /**
   * It takes the values from the form and assigns them to the main object
   */
  next() {
    if (this.main.serviceType == 'mudanza') {
      this.main.mudanza.first_name = this.first_name?.value;
      this.main.mudanza.last_name = this.last_name?.value;
      this.main.mudanza.rut = this.rut?.value;
      this.main.mudanza.email = this.email?.value;
      this.main.mudanza.phone = this.phone?.value;
      this.main.mudanza.whatsapp = this.whatsapp?.value;
      this.main.mudanza.referral_code = this.referral_code?.value;
      this.main.mudanza.date = this.date?.value;
      this.main.mudanza.hour = this.hour?.value;
    } else {
      this.main.flete.first_name = this.first_name?.value
      this.main.flete.last_name = this.last_name?.value;
      this.main.flete.rut = this.rut?.value;
      this.main.flete.email = this.email?.value;
      this.main.flete.phone = this.phone?.value;
      this.main.flete.whatsapp = this.whatsapp?.value;
      this.main.flete.referral_code = this.referral_code?.value
      this.main.flete.date = this.date?.value;
      this.main.flete.hour = this.hour?.value;
    }
   
    this.main.step$.next(2);
  }

  /**
   * It sets the main.mudanza and main.flete objects to empty objects, and then it navigates to the
   * /service route
   */
  cancel() {
    this.main.mudanza = {} as Moving;
    this.main.flete = {} as Freight;
    this.utilsService.goTo('/service')
  }

  get first_name() {
    return this.form.get('first_name');
  }
  get last_name() {
    return this.form.get('last_name');
  }
  get rut() {
    return this.form.get('rut');
  }
  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }
  get whatsapp() {
    return this.form.get('whatsapp');
  }
  get referral_code() {
    return this.form.get('referral_code');
  }
  get date() {
    return this.form.get('date');
  }
  get hour() {
    return this.form.get('hour');
  }

}
