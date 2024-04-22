// page-size-input.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-size-input',
  templateUrl: './page-size-input.component.html',
  imports:[FormsModule],
  standalone:true,
  styleUrls: ['./page-size-input.component.scss']
})
export class PageSizeInputComponent {
  @Output() pageSizeChange = new EventEmitter<number>();
  pageSize: number = 5;

  onPageSizeChange() {
    this.pageSizeChange.emit(this.pageSize);
  }
}
