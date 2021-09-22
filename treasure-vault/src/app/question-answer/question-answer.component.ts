import { Component, Input, OnInit } from "@angular/core";
import { Thread } from "./models/thread";
import { ThreadService } from "./services/thread.service";

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
}