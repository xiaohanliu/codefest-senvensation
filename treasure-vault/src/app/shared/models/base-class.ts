export interface IBase {
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
}