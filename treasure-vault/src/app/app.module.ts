import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatFormFieldModule,MatInputModule,MatChipsModule,MatListModule
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProblemsComponent } from './search-problems/search-problems.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProblemListComponent } from './problem-list/problem-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProblemsComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatChipsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
