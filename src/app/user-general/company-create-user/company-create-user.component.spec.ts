import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCreateUserComponent } from './company-create-user.component';

describe('CompanyCreateUserComponent', () => {
  let component: CompanyCreateUserComponent;
  let fixture: ComponentFixture<CompanyCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
