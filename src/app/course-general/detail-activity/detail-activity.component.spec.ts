import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DetailActivityComponent', () => {
  let component: DetailActivityComponent;
  let fixture: ComponentFixture<DetailActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
