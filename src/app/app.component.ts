import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpyComponent } from "./spy/spy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pippo';
}
