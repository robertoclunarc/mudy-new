import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDocumentsComponent } from './update-vehicle-documents.component';

describe('UpdateVehicleDocumentsComponent', () => {
  let component: UpdateVehicleDocumentsComponent;
  let fixture: ComponentFixture<UpdateVehicleDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
