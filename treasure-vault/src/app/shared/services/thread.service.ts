import { Injectable } from "@angular/core";
import { MockThreads } from "src/app/question-answer/mock-data/mock-issue-data";
import { Thread } from "src/app/question-answer/models/thread";


@Injectable({
    providedIn: 'root'
})
export class ThreadService {
    

    getThread(threadId: string): Thread {
        return this.mockThreadGetRequestMethod(threadId)
    }

    mockThreadGetRequestMethod(id: string): Thread {
         return MockThreads.filter(function (x: Thread) {
            if (x.id.includes(id)) { 
                return x;
            }
         })[0]
    }
}