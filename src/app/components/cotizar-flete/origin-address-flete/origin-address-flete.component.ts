import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FleteMainComponent } from '../flete-main/flete-main.component';

@Component({
  selector: 'app-origin-address-flete',
  templateUrl: './origin-address-flete.component.html',
  styleUrls: ['./origin-address-flete.component.scss']
})
export class OriginAddressFleteComponent implements OnInit {

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
  this.main.step3_ToAddress()
}

back(){
  this.main.step1_PersonalInfo();
}

}