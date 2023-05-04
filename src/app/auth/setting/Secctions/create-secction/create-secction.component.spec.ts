import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecctionComponent } from './create-secction.component';

describe('CreateSecctionComponent', () => {
  let component: CreateSecctionComponent;
  let fixture: ComponentFixture<CreateSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
