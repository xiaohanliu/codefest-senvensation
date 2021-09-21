import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProblemsComponent } from './search-problems/search-problems.component';


const routes: Routes = [
  {path: '', redirectTo: 'search-problems', pathMatch: 'full'},
  {path: 'search-problems', component:SearchProblemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
