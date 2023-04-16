import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClientComponent } from './see-client.component';

describe('SeeClientComponent', () => {
  let component: SeeClientComponent;
  let fixture: ComponentFixture<SeeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
