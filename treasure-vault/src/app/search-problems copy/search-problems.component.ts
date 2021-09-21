import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-problems',
  templateUrl: './search-problems.component.html',
  styleUrls: ['./search-problems.component.scss']
})
export class SearchProblemsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  searchForm:FormGroup;
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search:[]
    })
  }

  submit(){
    console.log("serach submitted");
  }

}
