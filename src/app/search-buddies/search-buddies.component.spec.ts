import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBuddiesComponent } from './search-buddies.component';

describe('SearchBuddiesComponent', () => {
  let component: SearchBuddiesComponent;
  let fixture: ComponentFixture<SearchBuddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBuddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
