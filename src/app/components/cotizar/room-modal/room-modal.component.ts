import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  sizes = ['Grande', 'Mediano', 'Pequeño']
  elements = ['Elemento 1','Elemento 2','Elemento 3',]
  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {    
  }

}
