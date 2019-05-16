import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { AddExerciseComponent } from './exercise/add-exercise/add-exercise.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  { path: 'exercise-list', component: ExerciseListComponent},
  { path: 'add-exercise', component: AddExerciseComponent},
  { path: '', redirectTo:'exercise-list', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
