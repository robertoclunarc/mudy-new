import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleteMainComponent } from './flete-main.component';

describe('FleteMainComponent', () => {
  let component: FleteMainComponent;
  let fixture: ComponentFixture<FleteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
