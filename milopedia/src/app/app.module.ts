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
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { AddExerciseComponent } from './exercise/add-exercise/add-exercise.component';
import { ExerciseFilterPipe } from './pipes/exercise-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { MuscleComponent } from './muscle/muscle.component';
@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    YoutubePipe,
    AddExerciseComponent,
    ExerciseFilterPipe,
    MuscleComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
