import { Answer } from "../../models/answer"
import { Question } from "../../models/question"
import { Thread } from "../../models/thread"


export const MockQuestion1Data: Question = {questionId: "01", authorId: "01", issue: "Does my code look good?", title: "Cool title" , score: 1, tags:["angular","mock","spy"]}

export const MockAnswersData: Answer[] = [{answerId: "01", authorId: "02", response: "You suck!!!", score: -40}]

export const MockThread1Data: Thread = {threadId: "01", question: MockQuestion1Data, answers: MockAnswersData}

export const MockThreadData: Thread[] = [MockThread1Data]