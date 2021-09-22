export interface IBase {
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

export class Person {
    username: string
    organization: string

    constructor(user: string, org: string) {
        this.username = user
        this.organization = org
    }
}