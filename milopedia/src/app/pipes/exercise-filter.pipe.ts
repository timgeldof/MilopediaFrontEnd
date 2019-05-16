import { Pipe, PipeTransform } from '@angular/core';
import {Exercise} from '../exercise/exercise.model';

@Pipe({
  name: 'exerciseFilter'
})
export class ExerciseFilterPipe implements PipeTransform {

  transform(exercises: Exercise[], filter: string): Exercise[] {
    if(!filter)
      return exercises;
    else
      return exercises.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
