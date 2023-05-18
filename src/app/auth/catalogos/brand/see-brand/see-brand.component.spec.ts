import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBrandComponent } from './see-brand.component';

describe('SeeBrandComponent', () => {
  let component: SeeBrandComponent;
  let fixture: ComponentFixture<SeeBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
