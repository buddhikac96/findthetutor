import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorEditProfileComponent } from './tutor-edit-profile.component';

describe('TutorEditProfileComponent', () => {
  let component: TutorEditProfileComponent;
  let fixture: ComponentFixture<TutorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
