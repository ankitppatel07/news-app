import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ViewQueriesComponent } from './view-queries.component';
import { QuerySearchPipe } from 'src/app/pipes/query-search.pipe';

describe('ViewQueriesComponent', () => {
  let component: ViewQueriesComponent;
  let fixture: ComponentFixture<ViewQueriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ViewQueriesComponent, QuerySearchPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
