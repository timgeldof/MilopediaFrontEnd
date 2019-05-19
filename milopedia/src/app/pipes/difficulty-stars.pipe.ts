import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyStars'
})
export class DifficultyStarsPipe implements PipeTransform {

  transform(difficulty: number, args?: any): string {
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
