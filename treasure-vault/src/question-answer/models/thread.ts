import { Answer } from "./answer"
import { Question } from "./question"

export class Thread {
    threadId: String
    question: Question
    answers: Answer[] 
}