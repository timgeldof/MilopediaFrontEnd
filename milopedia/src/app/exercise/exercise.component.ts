import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise.model';
import {EXERCISES} from '../mock-exercises';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise : Exercise;
  exercises = EXERCISES;

  constructor() { }

  ngOnInit() {
  }
  addNewExercise(exercise: Exercise){
    this.exercises.push(exercise);
  }

}
