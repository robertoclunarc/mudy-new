import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginAddressFleteComponent } from './origin-address-flete.component';

describe('OriginAddressFleteComponent', () => {
  let component: OriginAddressFleteComponent;
  let fixture: ComponentFixture<OriginAddressFleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginAddressFleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginAddressFleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
