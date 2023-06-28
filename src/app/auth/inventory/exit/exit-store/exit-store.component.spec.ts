import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitStoreComponent } from './exit-store.component';

describe('ExitStoreComponent', () => {
  let component: ExitStoreComponent;
  let fixture: ComponentFixture<ExitStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
