import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailProductsComponent } from './inventory-detail-products.component';

describe('InventoryDetailProductsComponent', () => {
  let component: InventoryDetailProductsComponent;
  let fixture: ComponentFixture<InventoryDetailProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryDetailProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
