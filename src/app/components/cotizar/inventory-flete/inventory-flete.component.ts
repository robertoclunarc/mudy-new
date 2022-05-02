import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/services/dummy';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { ServiceMainComponent } from '../service-main/service-main.component';


@Component({
  selector: 'app-inventory-flete',
  templateUrl: './inventory-flete.component.html',
  styleUrls: ['./inventory-flete.component.scss']
})
export class InventoryFleteComponent implements OnInit {


  vehicles = Vehicles;
  selectedVehicle: string = '';
  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    autoplay: { delay: 2000 },
    navigation: false
  };

  constructor(public main: ServiceMainComponent,
  ) { }

  ngOnInit(): void {
    let size = window.screen.width

    if (size > 979) {
      this.config = {
        slidesPerView: 3.5,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }
  }

  selectVehicle(vehicle: string) {
    this.selectedVehicle = vehicle;
  }

  next() {
    alert('Método de pago')
  }

  back() {
    this.main.step3_ToAddress();
  }

  onSwiper(swiper: any) {

  }
  onSlideChange() {

  }

  onResize(event: any) {

    let size = event.target.innerWidth

    if (size > 979) {
      this.config = {
        slidesPerView: 3.5,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

  }

}