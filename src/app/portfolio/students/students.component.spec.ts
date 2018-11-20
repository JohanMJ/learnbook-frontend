import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStudents } from './students.component';

describe('PortfolioStudents', () => {
  let component: PortfolioStudents;
  let fixture: ComponentFixture<PortfolioStudents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioStudents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
