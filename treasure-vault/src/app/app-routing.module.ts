import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';


const routes: Routes = [
  { path: 'thread', component: QuestionAnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
