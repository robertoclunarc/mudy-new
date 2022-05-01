import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-clients-comments',
  templateUrl: './clients-comments.component.html',
  styleUrls: ['./clients-comments.component.scss']
})
export class ClientsCommentsComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    autoplay: {delay:2000},
    navigation: true
 };
  

  comments = [
    {img:'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', name:'Lorena P.', comment: 'Excelente servicio, se pasaron… Son Mis Favoritos!'},
    {img:'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/120376/s960_Universities_Minister_Michelle_Donelan.jpeg', name:'Alejandra D.', comment: 'Muy buena atención y mejor servicio, los felicito'},
    {img:'https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg', name:'Valeria S.', comment: 'En verdad muchas gracias; recomendados al 100%'},
    {img:'https://media.vanityfair.fr/photos/60d37b54e6816f0c4978e56b/16:9/w_2560%2Cc_limit/pierre_person_cover_vf_4178.jpeg', name:'Andres S.', comment: 'Los tendre muy presentes y los recomendare!'},
    {img:'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI', name:'Zully P.', comment: 'Agradezco en especial el trato, queda poca gente amable, Sigan asi!'}
  ]

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
        autoplay: {delay:2000}        
      }
    }

    if (this.screenx < 979) {
      this.config = {
        slidesPerView: 2.7,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (this.screenx < 734) {
      this.config = {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (this.screenx < 670) {
      this.config = {
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }

    if (this.screenx < 471) {
      this.config = {
        slidesPerView: 1.2,
        spaceBetween: 20,
        autoplay: {delay:2000}
      }
    }
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

  onSwiper(swiper: any) {
    
  }
  onSlideChange() {
 
  }
}
