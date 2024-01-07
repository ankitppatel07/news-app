import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewNewsListComponent } from './view-news-list.component';

describe('ViewNewsListComponent', () => {
  let component: ViewNewsListComponent;
  let fixture: ComponentFixture<ViewNewsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
