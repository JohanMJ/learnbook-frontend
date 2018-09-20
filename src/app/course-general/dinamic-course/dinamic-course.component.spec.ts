import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicCourseComponent } from './dinamic-course.component';

describe('DinamicCourseComponent', () => {
  let component: DinamicCourseComponent;
  let fixture: ComponentFixture<DinamicCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
