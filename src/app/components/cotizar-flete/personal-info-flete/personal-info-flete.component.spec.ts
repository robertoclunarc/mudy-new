import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoFleteComponent } from './personal-info-flete.component';

describe('PersonalInfoFleteComponent', () => {
  let component: PersonalInfoFleteComponent;
  let fixture: ComponentFixture<PersonalInfoFleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoFleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoFleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
