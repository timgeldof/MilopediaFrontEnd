import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import {
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, MatToolbarModule, MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { AddExerciseComponent } from './exercise/add-exercise/add-exercise.component';
import { ExerciseFilterPipe } from './pipes/exercise-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { MuscleComponent } from './muscle/muscle.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseModule } from './exercise/exercise.module';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    YoutubePipe,
    AddExerciseComponent,
    ExerciseFilterPipe,
    MuscleComponent, 
    PageNotFoundComponent, 
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    ExerciseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
