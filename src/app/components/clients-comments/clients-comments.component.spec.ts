import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCommentsComponent } from './clients-comments.component';

describe('ClientsCommentsComponent', () => {
  let component: ClientsCommentsComponent;
  let fixture: ComponentFixture<ClientsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
