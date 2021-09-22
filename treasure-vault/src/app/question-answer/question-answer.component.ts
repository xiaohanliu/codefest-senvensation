import { Component, Input, OnInit } from "@angular/core";
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

    constructor(threadService: ThreadService) { 
        this.threadService = threadService
    }

    ngOnInit() {
        this.displayThread = this.getQuestionThread("1")
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
}