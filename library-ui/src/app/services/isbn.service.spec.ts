import { TestBed } from '@angular/core/testing';

import { IsbnService } from './isbn.service';

describe('IsbnService', () => {
  let service: IsbnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsbnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid isbn numbers', () => {
      const service: IsbnService = TestBed.get(IsbnService);
      expect(service.isIsbnValid('9780470059029')).toBeTruthy();
      expect(service.isIsbnValid('978 1 86197 876 9')).toBeTruthy();
      expect(service.isIsbnValid('978-1-86197-876-9')).toBeTruthy();
    });

    it('should return false for invalid isbn numbers', () => {
       const service: IsbnService = TestBed.get(IsbnService);
       expect(service.isIsbnValid('1234567890123')).toBeFalsy();
       expect(service.isIsbnValid('a2345sd3')).toBeFalsy();
       expect(service.isIsbnValid('22221111')).toBeFalsy();
       expect(service.isIsbnValid('978-1-86197-877')).toBeFalsy();
     });
});
