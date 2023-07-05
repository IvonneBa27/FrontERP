import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInventoryDetailComponent } from './home-inventory-detail.component';

describe('HomeInventoryDetailComponent', () => {
  let component: HomeInventoryDetailComponent;
  let fixture: ComponentFixture<HomeInventoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInventoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInventoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
