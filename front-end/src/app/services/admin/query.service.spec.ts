import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Query } from 'src/app/models/query';
import { QueryService } from './query.service';
import { QUERIES } from 'src/app/data/queries';

describe('QueryService', () => {
  let service: QueryService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(QueryService);
    testingController = TestBed.inject(HttpTestingController);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update query', () => {
    let updatedQuery = new Query('test1@gmail.com', 'Test Query 1', 'Resolved', '1');
    service.updateQuery(updatedQuery).subscribe(
      (data: Query) => {
        expect(data).toBeTruthy();
        expect(data.status).toBe('Resolved');
      }
    )

    const mockReq = testingController.expectOne('http://localhost:8080/queries');
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedQuery = QUERIES[1];
    modifiedQuery.status = 'Resolved';
    mockReq.flush(modifiedQuery);
  });
  
});
