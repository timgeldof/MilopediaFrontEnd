import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseDataService } from '../exercise-data.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  public difficultyStars: string;
  public exercise: Exercise;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      item => this.exercise = item['exercise']
    )
    this.difficultyStars = this.makeStars(this.exercise.difficulty);
  }

  makeStars(difficulty: number) {
    let diff = "";
    for (let i = 0; i < difficulty; i++) {
      diff += "★";
    }
    // ☆
    for (let i = 5 - difficulty ; i > 0; i--) {
      diff += "☆";
    }
    return diff;
  }



}
