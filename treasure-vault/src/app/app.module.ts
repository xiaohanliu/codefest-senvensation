import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatFormFieldModule,MatInputModule,MatChipsModule,MatListModule,MatCardModule, MatIconModule 
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProblemsComponent } from './search-problems/search-problems.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { QuestionAnswerComponent } from 'src/question-answer/question-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProblemsComponent,
    ProblemListComponent,
    QuestionAnswerComponent
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
    MatListModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, QuestionAnswerComponent]
})
export class AppModule { }
