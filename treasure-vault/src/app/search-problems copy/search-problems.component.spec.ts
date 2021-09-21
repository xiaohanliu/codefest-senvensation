import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProblemsComponent } from './search-problems.component';

describe('SearchProblemsComponent', () => {
  let component: SearchProblemsComponent;
  let fixture: ComponentFixture<SearchProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
