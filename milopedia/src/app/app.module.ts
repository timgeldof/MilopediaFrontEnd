import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseModule } from './exercise/exercise.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptors/index';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    ReactiveFormsModule,
    LayoutModule,    
    AppRoutingModule,
    MaterialModule,

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
