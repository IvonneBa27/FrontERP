import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackListEditComponent } from './black-list-edit.component';

describe('BlackListEditComponent', () => {
  let component: BlackListEditComponent;
  let fixture: ComponentFixture<BlackListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
