import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      country: ['', Validators.required],
      team_full_name: ['', Validators.required],
      height: [''],
      weight: [''],
      draftYear: ['']
    });
  }

  form!: FormGroup ;
  ngOnInit(): void {
      }
  @Input() isVisible = false;

  closeModal(): void {
    this.isVisible = false;
  }

  create() {
    this.formSubmitted.emit(this.form);
  }
}
