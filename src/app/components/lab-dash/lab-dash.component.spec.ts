import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDashComponent } from './lab-dash.component';

describe('LabDashComponent', () => {
  let component: LabDashComponent;
  let fixture: ComponentFixture<LabDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabDashComponent]
    });
    fixture = TestBed.createComponent(LabDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
