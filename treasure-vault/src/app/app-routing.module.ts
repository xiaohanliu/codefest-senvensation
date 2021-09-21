import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { SearchProblemsComponent } from './search-problems/search-problems.component';
import { QuestionAnswerComponent } from 'src/question-answer/question-answer.component';

const routes: Routes = [
  {path: '', redirectTo: 'search-problems', pathMatch: 'full'},
  {path: 'search-problems', component:SearchProblemsComponent},
  {path: 'problem-list',component:ProblemListComponent},
  {path: 'thread', component: QuestionAnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
