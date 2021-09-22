import { Injectable } from "@angular/core";
import { Thread } from "../models/thread";
import { MockThreads } from "./mock-data/mock-issue-data";

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