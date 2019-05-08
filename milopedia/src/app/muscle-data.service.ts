import { Injectable } from '@angular/core';
import { Muscle } from './muscle.model';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of } from 'rxjs';
import { environment } from '../environments/environment';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MuscleDataService {
  public loadingError$ = new Subject<string>();


  constructor(private http: HttpClient) { }

  get muscles$(): Observable<Muscle[]> {
    return this.http.get(`${environment.apiURL}/muscle/`)
      .pipe(
        catchError(e => {
          this.loadingError$.next(e.statusText);
          return of(null);
        }),
        map(
          (list: any[]): Muscle[] => list.map(Muscle.fromJSON)
        )
      )
  }
  addNewMuscle(muscle: Muscle) {
    console.log(muscle.toJSON());
    return this.http.post(`${environment.apiURL}/muscle/`, muscle.toJSON());
    //returns response body == observable --> needs to be subscribed to
  }
}
