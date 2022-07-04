import { Component, OnInit } from '@angular/core';
import { SelectsService } from 'src/app/services/selects.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap'
import { BehaviorSubject } from 'rxjs';
import { PostRequestService } from 'src/app/services/post-request.service';
@Component({
  selector: 'app-inventory-mudanza',
  templateUrl: './inventory-mudanza.component.html',
  styleUrls: ['./inventory-mudanza.component.scss']
})
export class InventoryMudanzaComponent implements OnInit {

  placesSelected = new BehaviorSubject([] as any);
  placeOpenedIndex = new BehaviorSubject(null as any);
  places: any[] = [];
  articles: any[] = [];
  articlesModal: any;
  isModalOpen = false;
  items: any[] = [];

  roomCounter = 0;
  bathRoomCounter = 0;
  constructor(
    public selectService: SelectsService,
    public main: ServiceMainComponent,
    public utilsService: UtilsService,
    public postService: PostRequestService
  ) { }

  ngOnInit(): void {
    this.getPlaces();
    this.getArticles();
  }


  addRooms() {
    this.roomCounter++;
    this.placesSelected.value.push({ id: 1, roomCounter: this.roomCounter, name: 'Habitación', items: [], itemsId:[] })
  }

  decreaseRooms() {
    if (this.roomCounter > 0) {
      this.placesSelected.next(this.placesSelected.value.filter((res: any) => { return res.roomCounter !== this.roomCounter }))
      this.roomCounter--;
    }
  }

  addBathrooms() {
    this.bathRoomCounter++;
    this.placesSelected.value.push({ id: 8, bathRoomCounter: this.bathRoomCounter, name: 'Baño', items: [], itemsId:[]  })
  }

  decreaseBathrooms() {
    if (this.bathRoomCounter > 0) {
      this.placesSelected.next(this.placesSelected.value.filter((res: any) => { return res.bathRoomCounter !== this.bathRoomCounter }))
      this.bathRoomCounter--;
    }
  }

  selectPlace(place: any) {
    let currentPlace = { id: place.id, name: place.name, items: [] as any, itemsId:[] as any }
    this.placesSelected.value.push(currentPlace)
    this.places = this.places.filter(res => { return res.id !== place.id })
  }

  removePlace(place: any, index: any) {
    this.places.push(place);
    this.placesSelected.value.splice(index, 1);
  }


  getPlaces() {
    this.selectService.getPlaces().subscribe((res: any) => {
      this.places = res.data.filter((p: any) => { return p.id !== 1 && p.id !== 8 });
    })
  }

  getArticles() {
    this.selectService.getArticles().subscribe((res: any) => {
      this.articles = res.data;
      console.log(res.data);
      
    })
  }

  openArticlesModal(i: number) {
    this.placeOpenedIndex.next(i)
    this.isModalOpen = true;
    this.articlesModal = new bootstrap.Modal(document.getElementById('articlesModal') as any, {
      backdrop: 'static',
      keyboard: false
    })
    this.articlesModal?.show();
  }

  closeModal() {
    this.isModalOpen = false;
    this.articlesModal?.hide();
    this.placeOpenedIndex.next(null);
  }

  addArticles(article: any) {
    let articleFormated = {
      id: article.id,
      name: article.name,
    }
    this.placesSelected.value[this.placeOpenedIndex.value].items.push(articleFormated);
    this.placesSelected.value[this.placeOpenedIndex.value].itemsId.push(article.id);
  }

  removeArticle(index: any) {
    this.placesSelected.value[this.placeOpenedIndex.value].items.splice(index, 1);
    this.placesSelected.value[this.placeOpenedIndex.value].itemsId.splice(index, 1);
  }

  next() {
    let inventory = this.placesSelected.value.map((res: any) => {
      return {
        place_id: res.id,
        items: res.itemsId
      }
    })
    this.main.mudanza.origin = this.main.origin;
    this.main.mudanza.destination = this.main.destination;
    this.main.mudanza.inventory = inventory;
    this.postService.saveMovingData(this.main.mudanza).subscribe(res => {
      console.log(res);
    })
  }

  back() {
    this.main.step$.next(3);
  }


}
