import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeInputComponent } from './page-size-input.component';

describe('PageSizeInputComponent', () => {
  let component: PageSizeInputComponent;
  let fixture: ComponentFixture<PageSizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSizeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
