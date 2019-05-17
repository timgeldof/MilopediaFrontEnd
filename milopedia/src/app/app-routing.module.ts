import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExerciseModule } from 'src/app/exercise/exercise.module';
import { SelectivePreloadStrategy } from './selective-preload-strategy';

const appRoutes : Routes = [
  { path: 'exercise', 
    loadChildren:'src/app/exercise/exercise.module#ExerciseModule',
    data: {preload: true }
  },
  //{ path: '', redirectTo:'exercise/list', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadStrategy})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
