import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-clients-comments',
  templateUrl: './clients-comments.component.html',
  styleUrls: ['./clients-comments.component.scss']
})
export class ClientsCommentsComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  screenx = window.screen.width
  constructor() {
    
   }

  ngOnInit(): void {
    if (this.screenx > 979) {
      this.config = {
        slidesPerView: 3.5,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    } 
    
    if (this.screenx < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }
    
    if (this.screenx < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }
    
    if (this.screenx < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }

    if (this.screenx < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }
  }

  onResize(event: any) {

    let size = event.target.innerWidth
    
    if (size > 979) {
      this.config = {
        slidesPerView: 3.5,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    } 
    
    if (size < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }
    
    if (size < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }
    
    if (size < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }

    if (size < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
      }
    }

  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
