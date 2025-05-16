import { Component } from '@angular/core';
import { BindingsComponent } from '../bindings/bindings.component';
import { CopyrightDirective } from '../directive/copyright.directive';

@Component({
  selector: 'app-test-host',
  standalone: true,
  imports: [BindingsComponent, CopyrightDirective],
  templateUrl: './test-host.component.html',
  styleUrl: './test-host.component.css'
})
export class TestHostComponent {
  testTitle = 'My Title';
  isFavorite = false;
}
