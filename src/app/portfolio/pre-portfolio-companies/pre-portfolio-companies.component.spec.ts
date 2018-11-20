import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePortfolioCompanies } from './pre-portfolio-companies.component';

describe('PrePortfolioCompanies', () => {
  let component: PrePortfolioCompanies;
  let fixture: ComponentFixture<PrePortfolioCompanies>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePortfolioCompanies ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePortfolioCompanies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
