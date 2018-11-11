import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCardListComponent } from './teacher-card-list.component';

describe('TeacherCardListComponent', () => {
  let component: TeacherCardListComponent;
  let fixture: ComponentFixture<TeacherCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
