import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStoreComponent } from './transfer-store.component';

describe('TransferStoreComponent', () => {
  let component: TransferStoreComponent;
  let fixture: ComponentFixture<TransferStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
