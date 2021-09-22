import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemListService } from '../shared/services/problem-list.service';
import { Question } from './model/question';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  constructor(private router:Router, private problemListService:ProblemListService) { }

  @Input()
  searchKeywords:string;

  questionList:Question[]

  ngOnInit() {
    this.loadQuestionList();
  }

  loadQuestionList(){
    this.problemListService.getProblemList().subscribe({
      next: (problems) =>{
        console.log(problems);
        // this.questionList = problems;
      },
      error: (err)=>{
        console.error(err);
      }
    })

    // return [{id: "1", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["angular","mock","spy"]},
    // {id: "2", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["backend","java"]},
    // {id: "3", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["bdd","cucumber","selenium"]}]
  }

  filterQuestionList():Question[]{
    return []
  }
  goToThread(id:string){
    this.router.navigate(['/thread',{id:id}]);
  }


}
