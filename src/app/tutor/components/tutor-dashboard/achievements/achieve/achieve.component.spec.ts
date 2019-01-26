import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieveComponent } from './achieve.component';

describe('AchieveComponent', () => {
  let component: AchieveComponent;
  let fixture: ComponentFixture<AchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
