import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorBankDataComponent } from './promotor-bank-data.component';

describe('PromotorBankDataComponent', () => {
  let component: PromotorBankDataComponent;
  let fixture: ComponentFixture<PromotorBankDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotorBankDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
