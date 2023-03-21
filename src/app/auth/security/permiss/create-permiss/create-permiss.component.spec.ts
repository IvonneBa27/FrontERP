import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermissComponent } from './create-permiss.component';

describe('CreatePermissComponent', () => {
  let component: CreatePermissComponent;
  let fixture: ComponentFixture<CreatePermissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePermissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePermissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
