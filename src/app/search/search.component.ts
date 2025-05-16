import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchForm = new FormGroup({
    searchText: new FormControl('', Validators.required),
  });

  search() {
    if (this.searchForm.valid) {
      console.log(
        'You searched for: ' + this.searchForm.controls.searchText.value
      );
    }
  }
}
