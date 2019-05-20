import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/exercise/athlete.model';
import { Observable } from 'rxjs'
import { ExerciseDataService } from 'src/app/exercise/exercise-data.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete-exercises',
  templateUrl: './athlete-exercises.component.html',
  styleUrls: ['./athlete-exercises.component.css']
})
export class AthleteExercisesComponent implements OnInit {
  private _athleteEmail: string;
  
  private _fetchAthlete$: Observable<Athlete>;
  private _athlete: Athlete;
  constructor(private _exerciseDataService: ExerciseDataService, private _router: Router) { }

  ngOnInit() {
    this._athleteEmail = localStorage.getItem("email");
    this._fetchAthlete$ = this._exerciseDataService.getExerciseOfAthlete$(this._athleteEmail);
  }

  removeFromMyExercises(id: number){
    this._exerciseDataService.removeExerciseFromAthlete$(id).subscribe( () => {
      return this._router.navigateByUrl("exercise/list");
    });
  }
  
}
