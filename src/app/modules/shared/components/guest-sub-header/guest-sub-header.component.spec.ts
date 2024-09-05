import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSubHeaderComponent } from './guest-sub-header.component';

describe('GuestSubHeaderComponent', () => {
  let component: GuestSubHeaderComponent;
  let fixture: ComponentFixture<GuestSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestSubHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
