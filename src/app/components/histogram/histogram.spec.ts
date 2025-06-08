import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histogram } from './histogram';

describe('Histogram', () => {
  let component: Histogram;
  let fixture: ComponentFixture<Histogram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Histogram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histogram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
