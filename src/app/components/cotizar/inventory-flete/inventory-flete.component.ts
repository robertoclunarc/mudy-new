import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/services/dummy';
import { PostRequestService } from 'src/app/services/post-request.service';
import { SelectsService } from 'src/app/services/selects.service';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { ServiceMainComponent } from '../service-main/service-main.component';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-inventory-flete',
  templateUrl: './inventory-flete.component.html',
  styleUrls: ['./inventory-flete.component.scss']
})
export class InventoryFleteComponent implements OnInit {


  vehicleTypes: any[] = [];


  selectedVehicle: any;
  round_trip: string = 'Si';
  need_helper: string = 'Si';
  whatsApp_communication: boolean = true;
  cargo_description: string = '';
  file_path: string = '';

  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    autoplay: { delay: 2000 },
    navigation: false
  };

  constructor(
    public main: ServiceMainComponent,
    public selectService: SelectsService,
    public postService: PostRequestService
  ) { }

  ngOnInit(): void {

    this.getVehicleTypes();

    let size = window.screen.width

    if (size > 979) {
      this.config = {
        slidesPerView: 3.5,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }
  }

  _file_path(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file_path = reader.result as any;
    };
  }

  getVehicleTypes() {
    this.selectService.getVehicleTypes().subscribe((res: any) => {
      this.vehicleTypes = res.data;
    })
  }

  selectVehicle(vehicle: number) {
    this.selectedVehicle = vehicle;
  }

  next() {
    this.main.flete.vehicle_type_id = this.selectedVehicle;
    this.main.flete.file_path = this.file_path;
    this.main.flete.whatsApp_communication = this.whatsApp_communication;
    this.main.flete.origin = this.main.origin;
    this.main.flete.destination = this.main.destination;
    this.main.flete.cargo_description = this.cargo_description;
    if (this.need_helper == 'Si') {
      this.main.flete.need_helper = true;
    } else {
      this.main.flete.need_helper = false;
    }
    if (this.round_trip == 'Si') {
      this.main.flete.round_trip = true;
    } else {
      this.main.flete.round_trip = false;
    }

    this.main.step$.next(5);

  }

  back() {
    this.main.step$.next(3);
  }

  openSubmitedModal(){
    let submitedModal = new bootstrap.Modal(document.getElementById('submitedModal') as any, {
      keyboard: false
    })
    submitedModal?.show();    
  }

  validator() {
    if (!this.selectedVehicle) {
      return false;
    }
    if (!this.cargo_description) {
      return false;
    }
    if (!this.file_path) {
      return false;
    }

    return true;
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
        autoplay: { delay: 2000 }
      }
    }

    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: { delay: 2000 }
      }
    }

  }

}