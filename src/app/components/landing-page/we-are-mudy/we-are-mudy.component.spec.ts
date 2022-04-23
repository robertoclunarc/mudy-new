import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreMudyComponent } from './we-are-mudy.component';

describe('WeAreMudyComponent', () => {
  let component: WeAreMudyComponent;
  let fixture: ComponentFixture<WeAreMudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeAreMudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreMudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
