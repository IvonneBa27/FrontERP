import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackListCreateComponent } from './black-list-create.component';

describe('BlackListCreateComponent', () => {
  let component: BlackListCreateComponent;
  let fixture: ComponentFixture<BlackListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackListCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
