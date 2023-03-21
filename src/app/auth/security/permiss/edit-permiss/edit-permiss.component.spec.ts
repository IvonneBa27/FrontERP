import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermissComponent } from './edit-permiss.component';

describe('EditPermissComponent', () => {
  let component: EditPermissComponent;
  let fixture: ComponentFixture<EditPermissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPermissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPermissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
