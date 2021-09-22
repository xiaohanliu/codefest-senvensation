import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from './model/question';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  constructor(private router:Router) { }

  @Input()
  searchKeywords:string;

  questionList:Question[]

  ngOnInit() {
    this.questionList = this.loadQuestionList()
  }

  loadQuestionList():Question[]{
    return [{id: "01", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["angular","mock","spy"]},
    {id: "02", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["backend","java"]},
    {id: "03", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["bdd","cucumber","selenium"]}]
  }

  filterQuestionList():Question[]{
    return []
  }
  goToThread(){
    this.router.navigate(['thread']);
  }


}
