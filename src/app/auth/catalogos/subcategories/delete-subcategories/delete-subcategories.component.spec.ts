import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubcategoriesComponent } from './delete-subcategories.component';

describe('DeleteSubcategoriesComponent', () => {
  let component: DeleteSubcategoriesComponent;
  let fixture: ComponentFixture<DeleteSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
