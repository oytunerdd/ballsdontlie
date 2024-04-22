// search-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports:[FormsModule],
  standalone:true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();

  onSearchQueryChange(): void {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
