import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { AddExerciseComponent } from './exercise/add-exercise/add-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    YoutubePipe,
    AddExerciseComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
