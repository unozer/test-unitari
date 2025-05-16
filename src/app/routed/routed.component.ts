import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routed',
  standalone: true,
  imports: [],
  templateUrl: './routed.component.html',
  styleUrl: './routed.component.css',
})
export class RoutedComponent {
  title = 'Routed Component';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
