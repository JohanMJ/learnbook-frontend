import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePortfolio } from './pre-portfolio.component';

describe('PrePortfolio', () => {
  let component: PrePortfolio;
  let fixture: ComponentFixture<PrePortfolio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePortfolio ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
