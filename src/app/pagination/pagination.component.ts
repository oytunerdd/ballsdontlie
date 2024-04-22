import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageSizeInputComponent } from "../page-size-input/page-size-input.component";

@Component({
    selector: 'app-pagination',
    standalone: true,
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
    imports: [PageSizeInputComponent]
})
export class PaginationComponent {
  @Input() currentPage:number = 1;
  @Input() totalPages:number = 1;
  @Input() pageSize:number = 5;

  @Output() pageChange = new EventEmitter<number>();
  onPageChange(page: number) {
    console.log(page)
    this.pageChange.emit(page);
  }
  sum(n1:any, n2:any){
    return Number.parseInt(n2) + Number.parseInt(n1)
  }

  substract(n1:any, n2:any) {
    return Number.parseInt(n1) - Number.parseInt(n2)
  }
  
}
