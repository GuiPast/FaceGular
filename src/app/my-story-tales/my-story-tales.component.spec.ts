import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoryTalesComponent } from './my-story-tales.component';

describe('MyStoryTalesComponent', () => {
  let component: MyStoryTalesComponent;
  let fixture: ComponentFixture<MyStoryTalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoryTalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoryTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
