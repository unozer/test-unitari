import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  standalone: true,
  imports: [],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.css'
})
export class SpyComponent implements OnInit{
  caption : string = '';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.caption = this.title.getTitle();
  }
}
