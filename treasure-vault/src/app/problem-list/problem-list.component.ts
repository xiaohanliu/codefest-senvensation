import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemListService } from '../shared/services/problem-list.service';
import { Question } from './model/question';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute, private problemListService:ProblemListService) { }
  questionList:Question[]

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.loadQuestionList(params.searchKeywords)
    })
  }

  loadQuestionList(keywords:string){
    console.log("keywords");
    console.log(keywords);
    this.problemListService.getProblemList().subscribe({
      next: (problems) =>{
        if(keywords&&keywords.trim()!==""){
          this.questionList = problems.filter(prob =>prob.title.includes(keywords))
        }else{
          this.questionList = problems;
        }
      },
      error: (err)=>{
        console.error(err);
      }
    })
  }

  goToThread(id:string){
    this.router.navigate(['/thread',{id:id}]);
  }


}
