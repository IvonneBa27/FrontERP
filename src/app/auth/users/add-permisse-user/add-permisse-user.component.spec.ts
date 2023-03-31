import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermisseUserComponent } from './add-permisse-user.component';

describe('AddPermisseUserComponent', () => {
  let component: AddPermisseUserComponent;
  let fixture: ComponentFixture<AddPermisseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPermisseUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPermisseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
