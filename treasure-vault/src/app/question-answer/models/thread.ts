import { IBase, Person } from "../../shared/models/base-class"
import { Answer } from "./answer"

export class Thread implements IBase {
    id: string
    title: string
    description: string
    author: Person
    createdDate: Date
    updatedDate: Date
    upCount: number
    downCount: number
    parentId?: string
    tags: string[]
    answers: Answer[] 
}