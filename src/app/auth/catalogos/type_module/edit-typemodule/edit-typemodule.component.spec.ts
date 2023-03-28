import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypemoduleComponent } from './edit-typemodule.component';

describe('EditTypemoduleComponent', () => {
  let component: EditTypemoduleComponent;
  let fixture: ComponentFixture<EditTypemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
