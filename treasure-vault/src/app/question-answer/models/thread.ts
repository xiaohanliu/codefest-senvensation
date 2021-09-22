import { IBase } from "../../shared/models/base-class"

export class Thread implements IBase {
    id: string
    title: string
    description: string
    author: string
    createdDate: Date
    updatedDate: Date
    upCount: number
    downCount: number
    parentId?: string
    tags: string[]
    answers: IBase[] 
}