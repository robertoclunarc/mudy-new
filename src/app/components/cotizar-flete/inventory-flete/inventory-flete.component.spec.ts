import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFleteComponent } from './inventory-flete.component';

describe('InventoryFleteComponent', () => {
  let component: InventoryFleteComponent;
  let fixture: ComponentFixture<InventoryFleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryFleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
