import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSecctionComponent } from './see-secction.component';

describe('SeeSecctionComponent', () => {
  let component: SeeSecctionComponent;
  let fixture: ComponentFixture<SeeSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSecctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
