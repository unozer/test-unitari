import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StubService {

  name: string = 'Stub Service';

  isBusy(): boolean {
    return Math.random() > 0.5;
  }

}
