import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/exercise/exercise.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
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
  getExercise$(id): Observable<Exercise>{
    return this.http.get(`${environment.apiURL}/exercise/${id}`)
      .pipe(          
        map((record: any): Exercise => Exercise.fromJSON(record))
        );
  }
  addNewExercise(exercise: Exercise) {
    console.log(this);
    return this.http.post(`${environment.apiURL}/exercise/`, exercise.toJSON());
    //returns response body == observable --> needs to be subscribed to
  }
  addNewJsonExercise(json: any){
    console.log(json);
    return this.http.post(`${environment.apiURL}/exercise/`, json).subscribe();
  }
  checkExerciseNameAvailability = (name: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiURL}/exercise/checkexercisename`,
      {
        params: { name }
      }
    );
  };
}
