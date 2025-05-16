import { Component, OnInit } from '@angular/core';
import { StubService } from '../service/stub.service';

@Component({
  selector: 'app-stub',
  standalone: true,
  imports: [],
  templateUrl: './stub.component.html',
  styleUrl: './stub.component.css'
})
export class StubComponent implements OnInit{
  msg : string = '';

  constructor(private stubService: StubService) {}

  ngOnInit(): void {
    this.msg = this.stubService.isBusy()
    ? this.stubService.name + ' is on mission'
    : this.stubService.name + ' is available';
  }
}
