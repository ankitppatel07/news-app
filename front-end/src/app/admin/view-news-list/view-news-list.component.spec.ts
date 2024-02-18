import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ViewNewsListComponent } from './view-news-list.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';

describe('ViewNewsListComponent', () => {
  let component: ViewNewsListComponent;
  let fixture: ComponentFixture<ViewNewsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ViewNewsListComponent, SearchPipe ]
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
