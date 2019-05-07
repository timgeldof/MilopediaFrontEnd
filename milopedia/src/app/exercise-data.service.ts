import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../environments/environment';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {
  public loadingError$ = new Subject<string>();


  constructor(private http: HttpClient) { }

  get exercises$(): Observable<Exercise[]> {
    return this.http.get(`${environment.apiURL}/exercise/`)
      .pipe(
        catchError(e => {
          this.loadingError$.next(e.statusText);
          return of(null);
        }),
        map(
          (list: any[]): Exercise[] => list.map(Exercise.fromJSON)
        )
      )
  }
  addNewExercise(exercise: Exercise) {
    console.log(exercise.toJSON());
    return this.http.post(`${environment.apiURL}/recipes/`, exercise.toJSON());
    //returns response body == observable --> needs to be subscribed to
  }
}
