import { Component, OnInit } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-inventory-mudanza',
  templateUrl: './inventory-mudanza.component.html',
  styleUrls: ['./inventory-mudanza.component.scss']
})
export class InventoryMudanzaComponent implements OnInit {

  rooms = ['Cocina', 'Logia', 'Sala', 'Terraza', 'Otro']
  places: any = [];
  articles: any = [];
  constructor(
    public selectService: SelectsService,
    public main: ServiceMainComponent,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.getPlaces();
    this.getArticles();
  }

  getPlaces() {
    this.selectService.getPlaces().subscribe((res: any) => {
      this.places = res.data;
    
      console.log(res);
      
    })
  }

  getArticles() {
    this.selectService.getArticles().subscribe((res: any) => {
      this.articles = res.data;
      console.log(res);
      
    })
  }

  next() {
    alert('Método de pago')
  }

  back() {
    this.main.step$.next(3);
  }


}
