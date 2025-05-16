import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { itemResolver } from './items.resolver';
import { Observable } from 'rxjs';

describe('itemResolver', () => {
  const executeResolver: ResolveFn<String[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => itemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should return items', () => {
    (executeResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot) as Observable<String[]>).subscribe((items) => {
      expect(items).toEqual(['item1', 'item2', 'item3']);
    });
  });
});
