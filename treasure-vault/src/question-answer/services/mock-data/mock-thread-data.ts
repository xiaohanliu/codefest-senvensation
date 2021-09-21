import { Answer } from "src/question-answer/models/answer";
import { Question } from "src/question-answer/models/question";
import { Thread } from "src/question-answer/models/thread";

export const MockQuestion1Data: Question = {questionId: "01", authorId: "01", question: "Does my code look good?", title: "Cool title" , score: 1}

export const MockAnswersData: Answer[] = [{answerId: "01", authorId: "02", response: "You suck!!!", score: -40}]

export const MockThread1Data: Thread = {threadId: "01", question: MockQuestion1Data, answers: MockAnswersData}

export const MockThreadData: Thread[] = [MockThread1Data]