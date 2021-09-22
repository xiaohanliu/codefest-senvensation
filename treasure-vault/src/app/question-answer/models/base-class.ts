export interface IBase {
    id: string
    title: string
    description: string
    author: string
    createdDate: Date
    updatedDate: Date
    upCount: Number
    downCount: Number
    parentId?: string
    tags: string[]
}