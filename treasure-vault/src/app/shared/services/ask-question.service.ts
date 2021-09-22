import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class AskQuestionService extends BaseHttpService{
    
    constructor(private httpClient:HttpClient){
        super(httpClient);
    }
    postQuestion():Observable<any>{
        return this.httpClient.post<any>(this.rootUrl+`issue`,this.httpOptions)
    }
}