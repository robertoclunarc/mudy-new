import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistTermsConditionsComponent } from './transportist-terms-conditions.component';

describe('TransportistTermsConditionsComponent', () => {
  let component: TransportistTermsConditionsComponent;
  let fixture: ComponentFixture<TransportistTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportistTermsConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
