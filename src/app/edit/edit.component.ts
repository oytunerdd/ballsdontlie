import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<any>();
  @Input() isVisible:boolean = false;
  @Input() rowItems: any;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.rowItems?.first_name, Validators.required],
      surname: [this.rowItems?.last_name, Validators.required],
      country: [this.rowItems?.country, Validators.required],
      team_full_name: [this.rowItems?.team.full_name, Validators.required],
      height: [this.rowItems?.height],
      weight: [this.rowItems?.weight],
      draftYear: [this.rowItems?.draft_year]
    });
  }

  closeModal(): void {
    this.isVisible = false;
    this.formClosed.emit();
    console.log("close event trg")
  }

  edit() {
    this.formSubmitted.emit(this.form); 
  }
}