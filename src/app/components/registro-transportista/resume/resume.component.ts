import { Component, OnInit } from '@angular/core';
import { TransportistaMainComponent } from '../transportista-main/transportista-main.component';
import * as bootstrap from 'bootstrap'
import { PostRequestService } from 'src/app/services/post-request.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  carrier;

  constructor(
    public main: TransportistaMainComponent,
    private postService: PostRequestService  
  ) { 
    this.carrier = this.main.carrier;
  }

  ngOnInit(): void {    
  }

  back() {
    this.main.step$.next(5);
  }

  openSubmitedModal(){
    let submitedModal = new bootstrap.Modal(document.getElementById('submitedModal') as any, {
      keyboard: false
    })
    submitedModal?.show();
  }

  openTermsAndConditionsModal(){
    let temrsAndConditionModal = new bootstrap.Modal(document.getElementById('temrsAndConditionModal') as any, {
      keyboard: false
    })
    temrsAndConditionModal?.show();
  }

  submit() {
    this.postService.saveCarrierData(this.carrier).subscribe((res: any) => {
      console.log(res);
      this.openSubmitedModal();
    })
  }
}
