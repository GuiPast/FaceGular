import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryTaleComponent } from './user-story-tale.component';

describe('UserStoryTaleComponent', () => {
  let component: UserStoryTaleComponent;
  let fixture: ComponentFixture<UserStoryTaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryTaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
