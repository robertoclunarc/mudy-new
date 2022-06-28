import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectsService } from 'src/app/services/selects.service';
import { Rut, UtilsService } from 'src/app/services/utils.service';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-transportista-bank-data',
  templateUrl: './transportista-bank-data.component.html',
  styleUrls: ['./transportista-bank-data.component.scss']
})
export class TransportistaBankDataComponent implements OnInit {
  isValidRut: Rut = Rut.incomplete;
  banks: any[] = [];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public main: TransportistaMainComponent,
    public utilsService: UtilsService,
    public selectService: SelectsService
  ) {

    this.form = this.formBuilder.group({
      account_holder: [this.main.carrier.account_holder, [Validators.required, Validators.minLength(4)]],
      account_type: [this.main.carrier.account_type, [Validators.required]],
      account_rut: [this.main.carrier.account_rut, [Validators.required, Validators.minLength(9)]],
      bank_id: [this.main.carrier.bank_id, [Validators.required]],
      account_number: [this.main.carrier.account_number, [Validators.required]],
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
    this.main.step$.next(2);
  }

  next() {
    this.main.carrier.account_holder = this.account_holder?.value
    this.main.carrier.account_type = this.account_type?.value
    this.main.carrier.account_rut = this.account_rut?.value
    this.main.carrier.bank_id = this.bank_id?.value
    this.main.carrier.account_number = this.account_number?.value.toString();
    this.main.step$.next(4);
  }

   /**
  * It checks if the rut is valid by comparing the last digit of the rut with the result of the
  * function validarRut() from the UtilsService
  */
    validateRut() {
      if (this.account_rut?.value && this.account_rut?.value.length == 9) {
  
        let rutSinDigitoVerificador = this.account_rut.value.slice(0, -1)
        let digitoVerificador = this.account_rut.value[this.account_rut.value.length - 1];
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

  get account_holder() {
    return this.form.get('account_holder');
  }

  get account_type() {
    return this.form.get('account_type');
  }

  get account_rut() {
    return this.form.get('account_rut');
  }

  get bank_id() {
    return this.form.get('bank_id');
  }

  get account_number() {
    return this.form.get('account_number');
  }
}
