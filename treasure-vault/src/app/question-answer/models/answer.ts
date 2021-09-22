import { IBase, Person } from "src/app/shared/models/base-class"

export class Answer implements IBase {
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
}