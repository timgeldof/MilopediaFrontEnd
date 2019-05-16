import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { YoutubePipe } from '../pipes/youtube.pipe';
import { ExerciseFilterPipe } from '../pipes/exercise-filter.pipe';
import { MuscleComponent } from '../muscle/muscle.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExerciseListComponent,
    YoutubePipe,
    ExerciseFilterPipe,
    AddExerciseComponent,
    MuscleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class ExerciseModule { }
