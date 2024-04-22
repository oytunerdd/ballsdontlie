import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  ngOnInit(): void {
   

  }
  constructor(){}
  @Output() filterChanged = new EventEmitter<string>();
  @Output() selectedFilters = new EventEmitter<string[]>();
  @Output() resetedFilters = new EventEmitter<string[]>();
  @Input() heights! : any[];
  @Input() country!: any[];
  @Input() weights!: any[];
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  selectedFilter: boolean = false;

  onFilterChange(filterValue: string) {
    this.filterChanged.emit(filterValue);
    console.log("UP")

  }

  emitSelectedFilters(selected: string[]) {
    this.selectedFilter = true;
    this.selectedFilters.emit(selected);
  }

  getSelectedFilters(): any {
    let filterList = {
      h:this.heights.filter(filter => filter.checked).map(filter => filter.label),
      c:this.country.filter(filter => filter.checked).map(filter => filter.label),
      w:this.weights.filter(filter => filter.checked).map(filter => filter.label)
    }
    return filterList ;
  }
  anyCheckboxSelected(): boolean {
    return this.heights.some(height => height.checked) ||
           this.country.some(coun => coun.checked) ||
           this.weights.some(weight => weight.checked);
}

  closeFiltersModal() {
    this.closeModal.emit();
  }

  resetFilters(){
    this.resetedFilters.emit();
  }
}