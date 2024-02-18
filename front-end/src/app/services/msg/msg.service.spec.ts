import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { MsgService } from './msg.service';

describe('MsgService', () => {
  let service: MsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MsgService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
