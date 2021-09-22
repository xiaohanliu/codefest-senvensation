import { IBase } from "../../models/base-class"
import { Thread } from "../../models/thread"


export const MockAnswers: IBase[] = [{id: "02", author: "ZedLepplin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["angular","mock","spy"], parentId: "01"}]

export const MockThread: Thread = {id: "01", author: "TedDancin", createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["angular","mock","spy"], answers: MockAnswers}

export const MockThreads: Thread[] = [MockThread]