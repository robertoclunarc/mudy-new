import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';
import { Modal } from "bootstrap";
import * as bootstrap from 'bootstrap'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {



  constructor(
    public main: TransportistaMainComponent  
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step5_VehicleDocuments();
  }

  openSubmitedModal(){
    let submitedModal = new bootstrap.Modal(document.getElementById('submitedModal') as any, {
      keyboard: false
    })
    submitedModal?.show();
  }

  openTermsAndConditionsModal(){
    let temrsAndConditionModal = new bootstrap.Modal(document.getElementById('temrsAndConditionModal') as any, {
      keyboard: false
    })
    temrsAndConditionModal?.show();
  }

  submit() {
    alert('Registro en revisión')
  }
}
