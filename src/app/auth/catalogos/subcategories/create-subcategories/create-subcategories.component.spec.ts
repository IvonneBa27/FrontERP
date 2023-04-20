import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubcategoriesComponent } from './create-subcategories.component';

describe('CreateSubcategoriesComponent', () => {
  let component: CreateSubcategoriesComponent;
  let fixture: ComponentFixture<CreateSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
