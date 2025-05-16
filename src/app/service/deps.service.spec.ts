import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DepsService } from './deps.service';

describe('DepsService', () => {
  let service: DepsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(DepsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get items', () => {
    service.getItems().subscribe();
    const req = httpTestingController.expectOne('https://pippo_franco.com');
    expect(req.request.method).toBe('GET');
  });

  it('should add item', () => {
    service.addItem('Camera').subscribe();
    const req = httpTestingController.expectOne('https://pippo_franco.com');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'Camera' });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
