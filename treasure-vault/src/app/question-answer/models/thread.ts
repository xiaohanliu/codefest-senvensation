import { Answer } from "./answer"
import { Question } from "./question"

export class Thread {
    threadId: string
    question: Question
    answers: Answer[] 
}