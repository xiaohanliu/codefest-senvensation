import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  submit(){
    this.searchKeywords = this.searchForm.get('search').value
    this.router.navigate(['problem-list']);
  }
}
