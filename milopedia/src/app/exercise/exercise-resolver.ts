import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Exercise } from './exercise.model';
import { Observable } from 'rxjs';
import { ExerciseDataService } from './exercise-data.service';

@Injectable({
    providedIn: 'root'
})

export class ExerciseResolver implements Resolve<Exercise>{

    constructor(private exerciseDataService: ExerciseDataService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Exercise> {
            return this.exerciseDataService.getExercise$(route.params['id']);
    }
}