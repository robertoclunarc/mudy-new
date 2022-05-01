import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';

@Component({
  selector: 'app-vehicle-documents',
  templateUrl: './vehicle-documents.component.html',
  styleUrls: ['./vehicle-documents.component.scss']
})
export class VehicleDocumentsComponent implements OnInit {

  constructor(
    public main: TransportistaMainComponent,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.main.step4_VehicleInfo();
  }

  next() {
    this.main.step6_Resume();
  }
}