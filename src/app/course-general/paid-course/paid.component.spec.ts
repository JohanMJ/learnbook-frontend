import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPaidComponent } from './paid.component';

describe('CoursesPaidComponent', () => {
  let component: CoursesPaidComponent;
  let fixture: ComponentFixture<CoursesPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
