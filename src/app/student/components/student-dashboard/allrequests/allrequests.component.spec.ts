import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrequestsComponent } from './allrequests.component';

describe('AllrequestsComponent', () => {
  let component: AllrequestsComponent;
  let fixture: ComponentFixture<AllrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
