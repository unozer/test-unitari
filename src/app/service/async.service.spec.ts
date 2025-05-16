import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set items', () => {
    const result = service.setItem('Camera');
    expect(result.length).toBe(4);
  });

  it('should get items', (done) => {
    service.getItem().subscribe(items => {
      expect(items.length).toBe(3);
      done();
    })
  });
});
