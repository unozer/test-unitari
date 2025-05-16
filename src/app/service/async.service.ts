import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

const items = ['Microphone', 'Speaker', 'Headphones'];

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  getItem(): Observable<string[]> {
    return of(items).pipe(delay(1000));
  }

  setItem(name: string) {
    return [...items, name];
  }
}
