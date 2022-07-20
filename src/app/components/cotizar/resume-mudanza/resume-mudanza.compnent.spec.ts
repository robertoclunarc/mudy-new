import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMudanzaComponent } from './resume-mudanza.component';

describe('ResumeComponent', () => {
  let component: ResumeMudanzaComponent;
  let fixture: ComponentFixture<ResumeMudanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeMudanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeMudanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});