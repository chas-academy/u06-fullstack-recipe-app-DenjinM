import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-salad',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
})
export class SaladComponent {

}
