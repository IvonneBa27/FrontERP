import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTypemoduleComponent } from './see-typemodule.component';

describe('SeeTypemoduleComponent', () => {
  let component: SeeTypemoduleComponent;
  let fixture: ComponentFixture<SeeTypemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTypemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTypemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
