import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksPopupComponent } from './thanks-popup.component';

describe('ThanksPopupComponent', () => {
  let component: ThanksPopupComponent;
  let fixture: ComponentFixture<ThanksPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
