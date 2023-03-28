import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypemoduleComponent } from './create-typemodule.component';

describe('CreateTypemoduleComponent', () => {
  let component: CreateTypemoduleComponent;
  let fixture: ComponentFixture<CreateTypemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
