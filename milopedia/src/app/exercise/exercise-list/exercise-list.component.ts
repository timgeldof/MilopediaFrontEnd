import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseDataService } from '../exercise-data.service';
import { Subject, Observable } from 'rxjs';
import { Muscle } from '../../muscle.model';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  private title: string = "Exercises";
  private _fetchExercises$: Observable<Exercise[]> = this._exerciseDataService.exercises$;

  public filterExerciseName: string;
  public filterExercise$ = new Subject<string>();

  constructor(private _exerciseDataService: ExerciseDataService) {
    this.filterExercise$.subscribe(val => (this.filterExerciseName = val));
  }

  ngOnInit() {
  }

  get exercises(): Observable<Exercise[]> {
    return this._fetchExercises$;
  }

  addToMyExercises(id: number) {
    this._exerciseDataService.addExerciseToAthlete$(id).subscribe();
  }
  removeExercise(id:number){
    this._exerciseDataService.removeExercise(id).subscribe(
      () => {this._fetchExercises$ = this._exerciseDataService.exercises$;}
    );
  }

  applyFilter(filter: string) {
    this.filterExerciseName = filter;
  }

}
