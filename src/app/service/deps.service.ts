import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepsService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('https://pippo_franco.com');
  }

  addItem(item: string) {
    return this.http.post('https://pippo_franco.com', { name: item });
  }
}
