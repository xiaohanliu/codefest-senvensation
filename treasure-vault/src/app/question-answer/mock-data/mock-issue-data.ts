import { Person } from "src/app/shared/models/base-class"
import { Answer } from "../models/answer"
import { Thread } from "../models/thread"


export const MockAnswers: Answer[] = [{id: "02", author: new Person("ZedLepplin", "Skynet"), createdDate: new Date(), updatedDate: new Date(), description: "You suck!!!", title: "Lame title" , upCount: 1, downCount: 85, tags:["angular","mock","spy"], parentId: "01"}]

export const MockThread: Thread = {id: "01", author: new Person("TedDancin", "The Good Place"), createdDate: new Date(), updatedDate: new Date(), description: "Does my code look good?", title: "Cool title" , upCount: 5, downCount: 2, tags:["angular","mock","spy"], answers: MockAnswers}

export const MockThreads: Thread[] = [MockThread]