import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileComponent } from './complete-profile.component';

describe('CompleteProfileComponent', () => {
  let component: CompleteProfileComponent;
  let fixture: ComponentFixture<CompleteProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteProfileComponent]
    });
    fixture = TestBed.createComponent(CompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
