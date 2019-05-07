import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise.model';
import {Muscle} from '../../muscle.model';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public exercise: FormGroup; 

  constructor() { }

  ngOnInit() {
    this.exercise = new FormGroup({
      name: new FormControl("name")
    })
  }
  addExercise(
    exercisename: HTMLInputElement, 
    description:HTMLInputElement, 
    difficulty: HTMLInputElement, 
    youtubeURL:HTMLInputElement): boolean{
    const exercise = new Exercise(0, exercisename.value, +difficulty.value, youtubeURL.value, description.value, new Array<Muscle>());
                                                      // plus in front of string converts it to a number
    return false;
  }

}
