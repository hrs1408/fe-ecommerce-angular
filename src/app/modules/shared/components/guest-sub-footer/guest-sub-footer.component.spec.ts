import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSubFooterComponent } from './guest-sub-footer.component';

describe('GuestSubFooterComponent', () => {
  let component: GuestSubFooterComponent;
  let fixture: ComponentFixture<GuestSubFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestSubFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestSubFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
