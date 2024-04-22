import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../players.service';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "../pagination/pagination.component";
import { PageSizeInputComponent } from "../page-size-input/page-size-input.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { FilterComponent } from "../filter/filter.component";
import { CreateComponent } from "../create/create.component";
import { EditComponent } from "../edit/edit.component";
import { Player } from '../player';
import { SuccessComponent } from "../success/success.component";




@Component({
    selector: 'app-home-table',
    standalone: true,
    templateUrl: './home-table.component.html',
    styleUrl: './home-table.component.scss',
    imports: [CommonModule, PaginationComponent, PageSizeInputComponent, SearchBarComponent, FilterComponent, CreateComponent, SuccessComponent, EditComponent]
})
export class HomeTableComponent implements OnInit{
  currentPage = 0;
  pageSize = 5;
  totalPages = 100;
  filteredItems: any[] = [];
  tableData: Player[] = [];

  isCreateModalVisible = false;
  isEditModalVisible:{ [key: number]: boolean } = {1:false};

  constructor(private playersService:PlayersService){
  }
  async ngOnInit(): Promise<void> {
    this.tableData = await this.playersService.getAllPlayers(this.currentPage,this.pageSize);
    this.filteredItems = this.tableData
    this.updateFullNames();
    this.createFilterAttributes();
    this.holdIndexes();

  }

  async onPageChange(page: number) {
    this.currentPage = page;
    this.tableData = await this.playersService.getAllPlayers(this.currentPage,this.pageSize);
    this.filteredItems = this.tableData
    this.updateFullNames();
    this.createFilterAttributes();

  }
  indexArray:any = []
  holdIndexes(){
    this.indexArray = this.filteredItems.map(item => ({ ...item, visible: false }));
    this.editArray = this.filteredItems.map(item => ({...item, visible:false}))
  }


  async onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.filteredItems = await this.playersService.getAllPlayers(this.currentPage,this.pageSize);
  }

  updateFullNames(): void {
    this.filteredItems.forEach(item => {
      item.fullName = `${item.first_name} ${item.last_name}`.trim();
    });
  }
  async onSearchQueryChange(searchQuery: string): Promise<void> {
    if (searchQuery.trim() === '') {
      this.filteredItems = [...this.tableData]; 
    } else {
      this.filteredItems = this.tableData.filter((item:any) =>
        item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.fullName && item.fullName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.team.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
    }
  }
  uniqueHeights:any;
  uniqueCountry:any;
  uniqueWeights:any;
  async createFilterAttributes(){
    this.uniqueHeights = [...new Set(this.filteredItems.map(item => item.height))];
    this.uniqueCountry = [...new Set(this.filteredItems.map(item => item.country))];
    this.uniqueWeights = [...new Set(this.filteredItems.map(item => item.weight))];
    this.uniqueHeights = this.uniqueHeights.map((item:any) => ({ label:item, checked: false }));
    this.uniqueCountry = this.uniqueCountry.map((item:any) => ({ label:item, checked: false }));
    this.uniqueWeights = this.uniqueWeights.map((item:any) => ({ label:item, checked: false }));
  }

  selectedFilters: string[] = [];

  onSelectedFilters(selected: any) {
      this.filteredItems = this.tableData.filter((item:any) => 
      selected.h.includes(item.height)  || 
      selected.c.includes(item.country) ||
      selected.w.includes(item.weight)
      )
  }
  toggleCreateModal(): void {
    this.isCreateModalVisible = !this.isCreateModalVisible;
  }
  toggleEditModal(row:any): void {
    this.indexArray[row].visible = !this.indexArray[row].visible;
  }
  openEditModal(row:any) {
    console.log("------")

    console.log(this.indexArray[row].visible)
    this.indexArray[row].visible = !this.indexArray[row].visible
    console.log(this.indexArray[row].visible)


  }

  submittedData: any;
  onFormSubmitted(formData: any) {
    this.submittedData = formData;
    this.filteredItems.unshift({
      id: 1000,
      first_name: formData.value.name,
      last_name: formData.value.surname,
      country: formData.value.country,
      team:{full_name:formData.value.team_full_name} ,
      height: formData.value.height,
      weight: formData.value.weight,
      draft_year: formData.value.draftYear
    })
    
  }

  showSuccess: boolean = false;

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000); 
  }
  showFilters: boolean = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  resetFilters() {
    this.filteredItems = this.tableData;
  }

  editItem(row:any, formData:any) {
    const index = this.filteredItems.findIndex(item => item.id === row.id);
      let updateFields = {
        id : row.id,
        first_name: formData.value.name,
        last_name: formData.value.surname,
        country: formData.value.country,
        team:{full_name: formData.value.team_full_name},
        height: formData.value.height,
        weight: formData.value.weight,
        draft_year: formData.value.draftYear,
      };
      if (index !== -1) {
        this.filteredItems[index] = { ...this.filteredItems[index], ...updateFields };
      }

  }

  deleteItem(row:any) {
    this.filteredItems = this.filteredItems.filter(item => item.id !== row.id);
  }
 
  isVisible:{ [key: number]: boolean } = {};
  editArray:any = []
  toggleVisibilityEdit(row:any): void {
    this.isVisible[row] = !this.isVisible[row]
}

  closeEditModal(row:any){
    this.indexArray[row].visible = false;
    console.log("closed ")
  }
}
