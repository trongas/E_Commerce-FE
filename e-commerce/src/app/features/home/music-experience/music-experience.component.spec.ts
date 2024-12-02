import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicExperienceComponent } from './music-experience.component';

describe('MusicExperienceComponent', () => {
  let component: MusicExperienceComponent;
  let fixture: ComponentFixture<MusicExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicExperienceComponent]
    });
    fixture = TestBed.createComponent(MusicExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
