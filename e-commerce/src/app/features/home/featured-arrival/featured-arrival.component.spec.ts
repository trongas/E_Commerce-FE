import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArrivalComponent } from './featured-arrival.component';

describe('FeaturedArrivalComponent', () => {
  let component: FeaturedArrivalComponent;
  let fixture: ComponentFixture<FeaturedArrivalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedArrivalComponent]
    });
    fixture = TestBed.createComponent(FeaturedArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
