import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSecctionComponent } from './list-secction.component';

describe('ListSecctionComponent', () => {
  let component: ListSecctionComponent;
  let fixture: ComponentFixture<ListSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
