import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDashboardComponent } from './tutor-dashboard.component';

describe('TutorDashboardComponent', () => {
  let component: TutorDashboardComponent;
  let fixture: ComponentFixture<TutorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
