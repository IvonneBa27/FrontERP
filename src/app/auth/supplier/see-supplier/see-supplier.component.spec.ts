import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSupplierComponent } from './see-supplier.component';

describe('SeeSupplierComponent', () => {
  let component: SeeSupplierComponent;
  let fixture: ComponentFixture<SeeSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
