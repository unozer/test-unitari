import { Component } from '@angular/core';
import { BindingsComponent } from '../bindings/bindings.component';

@Component({
  selector: 'app-test-host',
  standalone: true,
  imports: [BindingsComponent],
  templateUrl: './test-host.component.html',
  styleUrl: './test-host.component.css'
})
export class TestHostComponent {
  testTitle = 'My Title';
  isFavorite = false;
}
