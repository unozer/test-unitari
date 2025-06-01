import { ResolveFn } from '@angular/router';
import { AsyncService } from '../service/async.service';
import { inject } from '@angular/core';

export const itemResolver: ResolveFn<String[]> = () => {
  const asyncService = inject(AsyncService);
  return asyncService.getItem();
};
