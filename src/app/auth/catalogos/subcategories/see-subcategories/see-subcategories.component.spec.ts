import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSubcategoriesComponent } from './see-subcategories.component';

describe('SeeSubcategoriesComponent', () => {
  let component: SeeSubcategoriesComponent;
  let fixture: ComponentFixture<SeeSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
