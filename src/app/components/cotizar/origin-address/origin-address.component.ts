import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceMainComponent } from '../service-main/service-main.component';


@Component({
  selector: 'app-origin-address',
  templateUrl: './origin-address.component.html',
  styleUrls: ['./origin-address.component.scss']
})
export class OriginAddressComponent implements OnInit {

  @Input() serviceType: string | null = '';
  address: any = '';
  vivenda = '';

  constructor(private sanitizer: DomSanitizer,
    public main: ServiceMainComponent) {

    this.address = this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q=chile,santiago&t=&z=13&ie=UTF8&iwloc=&output=embed');

  }

  ngOnInit(): void {

  }


  changeAddress(event: any) {
    this.address = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=chile,${event.target.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  }


  next() {
    this.main.step3_ToAddress()
  }

  back() {
    this.main.step1_PersonalInfo();
  }

  changeVivienda(event: any){
   this.vivenda = event.target.value
  }

}
