import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingMainComponent } from './moving-main.component';

describe('MovingMainComponent', () => {
  let component: MovingMainComponent;
  let fixture: ComponentFixture<MovingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
