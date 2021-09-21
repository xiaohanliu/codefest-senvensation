import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { SearchProblemsComponent } from './search-problems/search-problems.component';


const routes: Routes = [
  {path: '', redirectTo: 'search-problems', pathMatch: 'full'},
  {path: 'search-problems', component:SearchProblemsComponent},
  {path: 'ask-question', component:AskQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
