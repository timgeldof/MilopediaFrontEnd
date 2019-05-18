import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Muscle } from '../../muscle.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { MuscleDataService } from 'src/app/muscle-data.service';
import { Observable } from 'rxjs';
import { ExerciseDataService } from 'src/app/exercise/exercise-data.service';
import { ValidatorFn } from '@angular/forms';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public exercise: FormGroup;
  private _fetchMuscles$: Observable<Muscle[]> = this._muscleDataService.muscles$;

  constructor(private _muscleDataService: MuscleDataService, private _exerciseDataService: ExerciseDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.exercise = this.formBuilder.group({
      id: [0],
      name: ["name", [Validators.required, Validators.minLength(5), Validators.maxLength(50)], this.serverSideValidateExerciseName()],
      difficulty: [1],
      youtubeURL: ["https://www.youtube.com/watch?v=xLK7qu8Fdg4"],
      description: ["Here comes the description, keep it short and let the video explain the rest"],
      exerciseMuscles: this.formBuilder.array([])
    });
    this.addMuscle();
  }
  get difficulties(){
    let difficulties = new Array<string>();
    for(let i = 1; i <= 5; i++){
      let subDif = "";
      for(let j = 0; j < i; j++){
        subDif+="★";
      }
      difficulties.push(subDif);
    }
    return difficulties;
  }
  get muscles(): FormArray{
    return this.exercise.get("exerciseMuscles") as FormArray
  }
  addMuscle() {
    this.muscles.push(
      this.formBuilder.group({
        exerciseId:[0],
        muscleId:[1] 
    }));
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    } else if (errors.maxlength) {
      return `needs at most 50 ${errors.maxlength.requiredLength} characters but got ${errors.maxlength.actualLength}`
    } else if (errors.exerciseAlreadyExists) {
      return `exercise already exists`;
    }
  }
  serverSideValidateExerciseName(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this._exerciseDataService.checkExerciseNameAvailability(control.value).pipe(
        map(available => {
          if (available) {
            return null;
          }
          return { exerciseAlreadyExists: true };
        })
      );
    };
  }

  onSubmit() {
    console.log(this.exercise.value);
    this._exerciseDataService.addNewJsonExercise(this.exercise.value);
  }
  
  get muscles$(): Observable<Muscle[]> {
    return this._fetchMuscles$;
  }

}
