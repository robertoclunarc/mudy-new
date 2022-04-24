import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMudanzaComponent } from './inventory-mudanza.component';

describe('InventoryMudanzaComponent', () => {
  let component: InventoryMudanzaComponent;
  let fixture: ComponentFixture<InventoryMudanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryMudanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMudanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
