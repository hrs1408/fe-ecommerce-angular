import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastHandlerComponent } from './toast-handler.component';

describe('ToastHandlerComponent', () => {
  let component: ToastHandlerComponent;
  let fixture: ComponentFixture<ToastHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
