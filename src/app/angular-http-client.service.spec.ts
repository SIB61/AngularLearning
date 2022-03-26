import { TestBed } from '@angular/core/testing';

import { AngularHttpClientService } from './angular-http-client.service';

describe('AngularHttpClientService', () => {
  let service: AngularHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
