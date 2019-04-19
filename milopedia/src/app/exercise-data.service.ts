import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {


  constructor(private http: HttpClient) { }

  get exercises$(): Observable<Exercise[]> {
    return this.http.get(`${environment.apiURL}/exercise/`)
      .pipe(
        map(
          (list: any[]): Exercise[] => list.map(Exercise.fromJSON)
        )
      )
  }
  addNewExercise(exercise: Exercise) {
    //this.exercises.push(exercise);
  }
}
