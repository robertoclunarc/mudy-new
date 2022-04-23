import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAddressFleteComponent } from './to-address-flete.component';

describe('ToAddressFleteComponent', () => {
  let component: ToAddressFleteComponent;
  let fixture: ComponentFixture<ToAddressFleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToAddressFleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAddressFleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
