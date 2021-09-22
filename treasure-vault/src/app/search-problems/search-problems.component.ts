import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-problems',
  templateUrl: './search-problems.component.html',
  styleUrls: ['./search-problems.component.scss']
})
export class SearchProblemsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  searchKeywords:string;
  searchForm:FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search:[]
    })
  }
  submit(){
    this.searchKeywords = this.searchForm.get('search').value
    this.router.navigate(['problem-list']);
  }

  AskQuestion(){
    this.router.navigate(['ask-question'])
  }
  returnToHome(){
    this.router.navigate(['problem-list']);
  }
}
