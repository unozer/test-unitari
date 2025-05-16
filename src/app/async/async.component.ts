import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../service/async.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent implements OnInit{
  items$ : Observable<string[]> | undefined;

  constructor(private asyncService: AsyncService) {}

  ngOnInit(): void {
    this.items$ = this.asyncService.getItem();
  }
}
