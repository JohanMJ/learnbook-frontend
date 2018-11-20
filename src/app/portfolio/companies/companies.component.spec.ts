import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCompanies } from './companies.component';

describe('PortfolioCompanies', () => {
  let component: PortfolioCompanies;
  let fixture: ComponentFixture<PortfolioCompanies>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCompanies ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCompanies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
