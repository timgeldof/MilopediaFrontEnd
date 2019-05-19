import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteExercisesComponent } from './athlete-exercises.component';

describe('AthleteExercisesComponent', () => {
  let component: AthleteExercisesComponent;
  let fixture: ComponentFixture<AthleteExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
