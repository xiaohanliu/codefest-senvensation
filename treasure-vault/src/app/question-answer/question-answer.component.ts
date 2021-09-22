import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThreadService } from "../shared/services/thread.service";
import { Thread } from "./models/thread";

@Component({
    selector: 'app-question-answer',
    templateUrl: './question-answer.component.html',
    styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

    @Input() public threadId: string
    private threadService: ThreadService
    public displayThread: Thread

    constructor(threadService: ThreadService,private route: ActivatedRoute) { 
        this.threadService = threadService
    }

    ngOnInit() {
        this.route.params.subscribe(params =>{
            this.displayThread = this.getQuestionThread(params.id);
        })
    }

    private getQuestionThread(threadId: string):Thread {
        return this.threadService.getThread("1")
    }

    public upVote() {
        this.displayThread.upCount++
    }

    public downVote() {
        this.displayThread.downCount++
    }
}