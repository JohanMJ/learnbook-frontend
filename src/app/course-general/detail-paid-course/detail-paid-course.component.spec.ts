import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPaidCourseComponent } from './detail-paid-course.component';

describe('DetailCourseComponent', () => {
  let component: DetailPaidCourseComponent;
  let fixture: ComponentFixture<DetailPaidCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPaidCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaidCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
