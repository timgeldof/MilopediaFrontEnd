import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise.model';
import { Muscle } from '../../muscle.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { MuscleDataService } from 'src/app/muscle-data.service';
import { Observable } from 'rxjs';
import { ExerciseDataService } from 'src/app/exercise-data.service';
@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public exercise: FormGroup;
  @Output() public newExercise = new EventEmitter<Exercise>();
  private _fetchMuscles$: Observable<Muscle[]> = this._muscleDataService.muscles$;

  constructor(private _muscleDataService: MuscleDataService, private _exerciseDataService: ExerciseDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.exercise = this.formBuilder.group({
      id: [0],
      name: ["name", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      difficulty: [1],
      youtubeURL: ["https://www.youtube.com/watch?v=xLK7qu8Fdg4"],
      description: ["Here comes the description, keep it short and let the video explain the rest"],
      exerciseMuscles: this.formBuilder.array([this.addMuscle()])
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

  get muscleForms() {
    return this.exercise.get('exerciseMuscles') as FormArray
  }
  addMuscleToFormArray(){
    this.muscleForms.push(this.addMuscle());
  }
  addMuscle() {
    return this.formBuilder.group({
      exerciseId:[0],
      muscleId:[1]
    })
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    } else if (errors.maxlength) {
      return `needs at most 50 ${errors.maxlength.requiredLength} characters but got ${errors.maxlength.actualLength}`
    }
  }
  onSubmit() {
    this.newExercise.emit(this.exercise.value);
  }
  
  get muscles$(): Observable<Muscle[]> {
    return this._fetchMuscles$;
  }

}
