import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { FormValidatorService } from './form-validator.service';

describe('FormValidatorService', () => {
  let service: FormValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidatorService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
