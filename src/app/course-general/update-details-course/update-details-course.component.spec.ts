import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsCourseComponent } from './update-details-course.component';

describe('UpdateDetailsCourseComponent', () => {
  let component: UpdateDetailsCourseComponent;
  let fixture: ComponentFixture<UpdateDetailsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailsCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
