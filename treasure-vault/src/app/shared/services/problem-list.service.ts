import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "src/app/problem-list/model/question";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class ProblemListService extends BaseHttpService{
    
    constructor(private httpClient:HttpClient){
        super(httpClient);
    }
    getProblemList():Observable<Question[]>{
        return this.httpClient.get<Question[]>(this.rootUrl+'issue',this.httpOptions)
    }
}