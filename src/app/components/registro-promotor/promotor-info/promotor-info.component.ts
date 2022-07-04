import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rut, UtilsService } from 'src/app/services/utils.service';
import { PromotorMainComponent } from '../promotor-main/promotor-main.component';

@Component({
  selector: 'app-promotor-info',
  templateUrl: './promotor-info.component.html',
  styleUrls: ['./promotor-info.component.scss']
})
export class PromotorInfoComponent implements OnInit {

  isValidRut: Rut = Rut.incomplete;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public main: PromotorMainComponent,
    public utilsService: UtilsService) {

    this.form = this.formBuilder.group({
      first_name: [this.main.promoter.first_name, [Validators.required, Validators.minLength(4)]],
      last_name: [this.main.promoter.last_name, [Validators.required, Validators.minLength(4)]],
      rut: [this.main.promoter.rut, [Validators.required, Validators.minLength(9)]],
      email: [this.main.promoter.email, [Validators.required, Validators.email]],
      phone: [this.main.promoter.phone, [Validators.required]],
    });
  }

  ngOnInit(): void {
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

  cancel() {
    this.utilsService.goTo('/partners')
  }

  next() {
    this.main.promoter.first_name = this.first_name?.value;
    this.main.promoter.last_name = this.last_name?.value;
    this.main.promoter.rut = this.rut?.value;
    this.main.promoter.email = this.email?.value;
    this.main.promoter.phone = this.phone?.value;
    this.main.step$.next(2)
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

}