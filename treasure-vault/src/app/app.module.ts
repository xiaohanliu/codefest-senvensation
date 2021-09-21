import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule } from '@angular/material';
import { QuestionAnswerComponent } from 'src/question-answer/question-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, QuestionAnswerComponent]
})
export class AppModule { }
