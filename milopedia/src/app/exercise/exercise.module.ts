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
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseResolver } from './exercise-resolver';
import { AthleteExercisesComponent } from './athlete-exercises/athlete-exercises.component';
import { DifficultyStarsPipe } from '../pipes/difficulty-stars.pipe'
import { ShortDescriptionPipe } from '../pipes/short-description.pipe';
import { AuthGuard } from 'src/app/user/auth.guard';

const routes : Routes = [
  { path: 'list', component: ExerciseListComponent},
  { path: 'add', canActivate: [AuthGuard], component: AddExerciseComponent},
  { path: 'athlete', canActivate: [AuthGuard],component: AthleteExercisesComponent},  
  { path: ':id',component: ExerciseDetailComponent, resolve:{exercise: ExerciseResolver}},
]

@NgModule({
  declarations: [
    ExerciseListComponent,
    YoutubePipe,
    ExerciseFilterPipe,
    ShortDescriptionPipe,
    DifficultyStarsPipe,
    AddExerciseComponent,
    MuscleComponent,
    ExerciseDetailComponent,
    AthleteExercisesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpClientModule]
})
export class ExerciseModule { }
