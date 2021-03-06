import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';

const routes: Routes = [
  {path: '', redirectTo: 'problem-list', pathMatch: 'full'},
  {path: 'problem-list',component:ProblemListComponent},
  {path: 'thread', component: QuestionAnswerComponent },
  {path: 'ask-question', component:AskQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
