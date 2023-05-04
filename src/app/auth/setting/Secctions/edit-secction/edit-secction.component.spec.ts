import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecctionComponent } from './edit-secction.component';

describe('EditSecctionComponent', () => {
  let component: EditSecctionComponent;
  let fixture: ComponentFixture<EditSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
