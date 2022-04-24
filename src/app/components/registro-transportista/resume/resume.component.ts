import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

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
    this.main.step4_VehicleDocuments();
  }

  submit() {
    alert('Registro en revisión')
  }
}
