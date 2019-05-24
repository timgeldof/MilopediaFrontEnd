import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/exercise/exercise.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Athlete } from 'src/app/exercise/athlete.model';

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
  getAthlete$(email): Observable<Athlete>{
    return this.http.get(`${environment.apiURL}/athlete/${email}`)
      .pipe(          
        map((record: any): Athlete => Athlete.fromJSON(record))
        );
  }
  getExercisesOfAthlete(email): Observable<Exercise[]>{
    return this.http.get(`${environment.apiURL}/athleteexercise/${email}`)
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
  addExerciseToAthlete$(exerciseId): Observable<Object>{
    let email: string = localStorage.getItem("email");
    email = email.replace("@","%40");
    return this.http.post(`${environment.apiURL}/athlete/exercise/${email}?exerciseId=${exerciseId}`, {});
  }
  removeExerciseFromAthlete$(exerciseId): Observable<Object>{
    let email: string = localStorage.getItem("email");
    email = email.replace("@","%40");
    return this.http.delete(`${environment.apiURL}/athlete/exercise/${email}?exerciseId=${exerciseId}`, {});
  }
  removeExercise(exerciseId): Observable<Object>{
    return this.http.delete(`${environment.apiURL}/exercise/${exerciseId}`, {});
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
