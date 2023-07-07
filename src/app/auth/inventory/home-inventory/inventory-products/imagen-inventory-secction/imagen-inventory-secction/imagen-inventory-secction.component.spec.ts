import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenInventorySecctionComponent } from './imagen-inventory-secction.component';

describe('ImagenInventorySecctionComponent', () => {
  let component: ImagenInventorySecctionComponent;
  let fixture: ComponentFixture<ImagenInventorySecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenInventorySecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenInventorySecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
