import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorMainComponent } from './promotor-main.component';

describe('PromotorMainComponent', () => {
  let component: PromotorMainComponent;
  let fixture: ComponentFixture<PromotorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
