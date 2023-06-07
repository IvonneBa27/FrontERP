import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStoreDetailComponent } from './income-store-detail.component';

describe('IncomeStoreDetailComponent', () => {
  let component: IncomeStoreDetailComponent;
  let fixture: ComponentFixture<IncomeStoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeStoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeStoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
