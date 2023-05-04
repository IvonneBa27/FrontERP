import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSecctionComponent } from './delete-secction.component';

describe('DeleteSecctionComponent', () => {
  let component: DeleteSecctionComponent;
  let fixture: ComponentFixture<DeleteSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
