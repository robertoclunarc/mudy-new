import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAddressComponent } from './to-address.component';

describe('ToAddressComponent', () => {
  let component: ToAddressComponent;
  let fixture: ComponentFixture<ToAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
