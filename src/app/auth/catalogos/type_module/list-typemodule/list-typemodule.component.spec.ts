import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypemoduleComponent } from './list-typemodule.component';

describe('ListTypemoduleComponent', () => {
  let component: ListTypemoduleComponent;
  let fixture: ComponentFixture<ListTypemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
