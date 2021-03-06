import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AskQuestionService } from '../shared/services/ask-question.service';
import {BaseHttpService} from '../shared/services/base-http.service'

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private askQuestionService: AskQuestionService
  ) { }

  questionForm: FormGroup;
  //titleRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  submit() {
    if (!this.questionForm.valid) {
      return;
    }
    console.log(this.questionForm.value);

    this.askQuestionService.postQuestion(this.questionForm.value).subscribe({      
      next: (response) =>{
        console.log(response);
        this.router.navigate(['problem-list']);
    }})    
  }


  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title: [],
      description: []
    });
  }

}
