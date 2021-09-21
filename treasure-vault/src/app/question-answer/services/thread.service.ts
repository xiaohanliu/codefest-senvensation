import { Injectable } from "@angular/core";
import { Thread } from "../models/thread";
import { MockThreadData } from "./mock-data/mock-thread-data";

@Injectable({
    providedIn: 'root'
})
export class ThreadService {

    getThread(threadId: string): Thread {
        return this.mockThreadGetRequestMethod(threadId)
    }

    mockThreadGetRequestMethod(id: string): Thread {
         return MockThreadData.filter(function (x: Thread) {
            if (x.threadId.includes(id)) { 
                return x;
            }
         })[0]
    }
}