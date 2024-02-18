import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { LoginRegService } from './login-reg.service';

describe('LoginRegService', () => {
  let service: LoginRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LoginRegService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
