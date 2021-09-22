import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  title = 'treasure-vault';
  searchKeywords:string;
  searchForm:FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search:[]
    })
  }
}
