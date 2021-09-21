import { Component, Input, OnInit } from "@angular/core";
import { Thread } from "./models/thread";
import { ThreadService } from "./services/thread.service";

@Component({
    selector: 'app-question-answer',
    templateUrl: './question-answer.component.html'
})
export class QuestionAnswerComponent implements OnInit {

    @Input() public threadId: string
    private threadService: ThreadService
    private displayThread: Thread

    constructor(threadService: ThreadService) { 
        this.threadService = threadService
    }

    ngOnInit() {
        this.displayThread = this.getQuestionThread(this.threadId)
    }

    private getQuestionThread(threadId: string):Thread {
        return this.threadService.getThread(threadId)
    }
}