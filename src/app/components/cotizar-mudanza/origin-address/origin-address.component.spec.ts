import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginAddressComponent } from './origin-address.component';

describe('OriginAddressComponent', () => {
  let component: OriginAddressComponent;
  let fixture: ComponentFixture<OriginAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
