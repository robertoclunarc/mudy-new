import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndPrivacyComponent } from './policies-and-privacy.component';

describe('PoliciesAndPrivacyComponent', () => {
  let component: PoliciesAndPrivacyComponent;
  let fixture: ComponentFixture<PoliciesAndPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesAndPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
