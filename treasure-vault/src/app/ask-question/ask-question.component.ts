import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {


  questionForm: FormGroup;
  titleRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  submit() {
    if (!this.questionForm.valid) {
      return;
    }
    console.log(this.questionForm.value);
  }
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.pattern(this.titleRegx)]],
      description: [null, Validators.required]
    });
  }

}
