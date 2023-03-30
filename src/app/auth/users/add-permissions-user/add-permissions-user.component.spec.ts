import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissionsUserComponent } from './add-permissions-user.component';

describe('AddPermissionsUserComponent', () => {
  let component: AddPermissionsUserComponent;
  let fixture: ComponentFixture<AddPermissionsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPermissionsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPermissionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
