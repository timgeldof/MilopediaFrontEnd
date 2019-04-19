import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise.model';
import {Muscle} from '../../muscle.model';
@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
 
  @Output() public newExercise = new EventEmitter<Exercise>();
  constructor() { }

  ngOnInit() {
  }
  addExercise(
    exercisename: HTMLInputElement, 
    description:HTMLInputElement, 
    difficulty: HTMLInputElement, 
    youtubeURL:HTMLInputElement): boolean{
    const exercise = new Exercise(0, exercisename.value, +difficulty.value, youtubeURL.value, description.value, new Array<Muscle>());
                                                      // plus in front of string converts it to a number
    this.newExercise.emit(exercise);
    return false;
  }

}
