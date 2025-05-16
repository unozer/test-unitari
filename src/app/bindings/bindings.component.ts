import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  title = input('');
  liked = output();
}
