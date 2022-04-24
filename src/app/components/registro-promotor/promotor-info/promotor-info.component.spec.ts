import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorInfoComponent } from './promotor-info.component';

describe('PromotorInfoComponent', () => {
  let component: PromotorInfoComponent;
  let fixture: ComponentFixture<PromotorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
