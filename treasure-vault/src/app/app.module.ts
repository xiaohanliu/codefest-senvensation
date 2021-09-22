import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatFormFieldModule,MatInputModule,MatChipsModule,MatListModule,MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule 
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProblemsComponent } from './search-problems/search-problems.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { HttpClientModule } from '@angular/common/http';
import { ProblemListService } from './shared/services/problem-list.service';
import { BaseHttpService } from './shared/services/base-http.service';
import { ThreadService } from './shared/services/thread.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchProblemsComponent,
    ProblemListComponent,
    QuestionAnswerComponent,
    AskQuestionComponent
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
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BaseHttpService,ProblemListService,ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
