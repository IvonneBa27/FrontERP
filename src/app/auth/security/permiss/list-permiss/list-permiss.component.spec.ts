import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermissComponent } from './list-permiss.component';

describe('ListPermissComponent', () => {
  let component: ListPermissComponent;
  let fixture: ComponentFixture<ListPermissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPermissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPermissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
