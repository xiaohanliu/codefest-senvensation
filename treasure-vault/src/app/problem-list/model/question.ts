import { IBase } from "src/app/shared/models/base-class";

export class Question implements IBase{
    id: string;
    title: string;
    description: string;
    author: string;
    createdDate: Date;
    updatedDate: Date;
    upCount: number;
    downCount: number;
    parentId?: string;
    tags: string[];
    
}