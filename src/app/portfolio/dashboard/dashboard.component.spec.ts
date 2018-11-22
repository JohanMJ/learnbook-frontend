import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboards } from './dashboard.component';

describe('PortfolioCompanies', () => {
  let component: Dashboards;
  let fixture: ComponentFixture<Dashboards>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboards ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
