import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypemoduleComponent } from './delete-typemodule.component';

describe('DeleteTypemoduleComponent', () => {
  let component: DeleteTypemoduleComponent;
  let fixture: ComponentFixture<DeleteTypemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTypemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
