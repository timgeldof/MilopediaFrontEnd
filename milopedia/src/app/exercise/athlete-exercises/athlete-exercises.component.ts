import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/exercise/athlete.model';
import { Observable } from 'rxjs'
import { ExerciseDataService } from 'src/app/exercise/exercise-data.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from 'src/app/exercise/exercise.model';

@Component({
  selector: 'app-athlete-exercises',
  templateUrl: './athlete-exercises.component.html',
  styleUrls: ['./athlete-exercises.component.css']
})
export class AthleteExercisesComponent implements OnInit {
  
  private _athleteEmail: string;
  private _fetchAthlete$: Observable<Athlete>;
  private _fetchExercises$: Observable<Exercise[]>;

  constructor(private _exerciseDataService: ExerciseDataService) { }

  ngOnInit() {
    this._athleteEmail = localStorage.getItem("email");
    this._fetchAthlete$ = this._exerciseDataService.getAthlete$(this._athleteEmail);
    this._fetchExercises$ = this._exerciseDataService.getExercisesOfAthlete(localStorage.getItem("email"));
  }

  removeFromMyExercises(id: number){
    this._exerciseDataService.removeExerciseFromAthlete$(id).subscribe( () => {
      this._fetchExercises$ = this._exerciseDataService.getExercisesOfAthlete(localStorage.getItem("email"));
    });
  }
  get exercises$(): Observable<Exercise[]>{
    return this._fetchExercises$;
  }
  
}
