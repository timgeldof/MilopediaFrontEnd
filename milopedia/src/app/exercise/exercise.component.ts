import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseDataService } from '../exercise-data.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  private title: string = "Exercises";
  private _fetchExercises$: Observable<Exercise[]> = this._exerciseDataService.exercises$;

  public filterExerciseName: string;
  public filterExercise$ = new Subject<string>();

  constructor(private _exerciseDataService: ExerciseDataService) {
    //this.filterExercise$.pipe(debounceTime(400)).subscribe(val => this.filterExerciseName = val);
  }

  ngOnInit() {
  }

  get exercises(): Observable<Exercise[]> {
    return this._fetchExercises$;
  }

  addNewExercise(exercise: Exercise) {
    this._exerciseDataService.addNewExercise(exercise);
  }

  applyFilter(filter: string) {
    this.filterExerciseName = filter;
  }

}
