import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FleteMainComponent } from '../flete-main/flete-main.component';

@Component({
  selector: 'app-to-address-flete',
  templateUrl: './to-address-flete.component.html',
  styleUrls: ['./to-address-flete.component.scss']
})
export class ToAddressFleteComponent implements OnInit {

  address: any = '';

  constructor(private sanitizer: DomSanitizer,
              public main: FleteMainComponent) {

    this.address = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=chile,santiago&t=&z=13&ie=UTF8&iwloc=&output=embed');

   }

  ngOnInit(): void {
      
  }


  changeAddress(event: any){
   this.address = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=chile,${event.target.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  } 


next(){
  this.main.step4_Inventory()
}

back(){
  this.main.step2_OriginAddress();
}

}