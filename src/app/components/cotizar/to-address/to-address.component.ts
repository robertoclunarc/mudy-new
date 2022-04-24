import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceMainComponent } from '../service-main/service-main.component';

@Component({
  selector: 'app-to-address',
  templateUrl: './to-address.component.html',
  styleUrls: ['./to-address.component.scss']
})
export class ToAddressComponent implements OnInit {
   
   @Input() serviceType: string | null = '';
   address: any = '';

  constructor(private sanitizer: DomSanitizer,
              public main: ServiceMainComponent) {

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