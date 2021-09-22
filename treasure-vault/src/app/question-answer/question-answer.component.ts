import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { GlobalValues } from "../shared/global-values";
import { Person } from "../shared/models/base-class";
import { ThreadService } from "../shared/services/thread.service";
import { Answer } from "./models/answer";
import { Thread } from "./models/thread";

@Component({
    selector: 'app-question-answer',
    templateUrl: './question-answer.component.html',
    styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

    @Input() public threadId: string
    private threadService: ThreadService
    private route: ActivatedRoute
    public displayThread: Thread
    public param: String
    public globalValues: GlobalValues
    answerForm: FormGroup;
    @ViewChild('mat-input-1', {static: false})public reply: ElementRef

    constructor(private formBuilder: FormBuilder, threadService: ThreadService, route: ActivatedRoute) { 
        this.threadService = threadService
        this.route = route
    }

    ngOnInit() {
        this.answerForm = this.formBuilder.group({
        reply:[]
        })
        const id = this.route.snapshot.paramMap.get('id')
        this.displayThread = this.getQuestionThread(id)
    }

    private getQuestionThread(threadId: string):Thread {
        return this.threadService.getThread(threadId)
    }

    public upVote() {
        this.displayThread.upCount++
    }

    public downVote() {
        this.displayThread.downCount++
    }

    public submitReply(id: string) {
        let newAnswer = new Answer()
        newAnswer.author = new Person("TedDancin", "The Good Place")
        newAnswer.parentId = id
        const date = new Date()
        newAnswer.createdDate = date
        newAnswer.updatedDate = date
        newAnswer.upCount = 0
        newAnswer.downCount = 0
        newAnswer.description = this.answerForm.get('reply').value
        this.displayThread.answers.push(newAnswer)
    }
}
