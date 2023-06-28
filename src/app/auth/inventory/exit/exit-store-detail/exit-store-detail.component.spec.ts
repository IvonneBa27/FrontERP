import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitStoreDetailComponent } from './exit-store-detail.component';

describe('ExitStoreDetailComponent', () => {
  let component: ExitStoreDetailComponent;
  let fixture: ComponentFixture<ExitStoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitStoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitStoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
