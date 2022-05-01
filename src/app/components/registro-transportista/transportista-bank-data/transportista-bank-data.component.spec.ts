import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaBankDataComponent } from './transportista-bank-data.component';

describe('TransportistaBankDataComponent', () => {
  let component: TransportistaBankDataComponent;
  let fixture: ComponentFixture<TransportistaBankDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportistaBankDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
