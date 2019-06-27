import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBuddiesComponent } from './my-buddies.component';

describe('MyBuddiesComponent', () => {
  let component: MyBuddiesComponent;
  let fixture: ComponentFixture<MyBuddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBuddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
