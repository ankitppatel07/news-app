import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ArticlesService } from './articles.service';

describe('NewsService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ArticlesService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
