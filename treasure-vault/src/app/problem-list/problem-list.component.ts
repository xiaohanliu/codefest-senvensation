import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  constructor() { }

  @Input()
  searchKeywords:string;

  ngOnInit() {
  }
  

}
