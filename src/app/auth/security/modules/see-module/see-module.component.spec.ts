import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeModuleComponent } from './see-module.component';

describe('SeeModuleComponent', () => {
  let component: SeeModuleComponent;
  let fixture: ComponentFixture<SeeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
