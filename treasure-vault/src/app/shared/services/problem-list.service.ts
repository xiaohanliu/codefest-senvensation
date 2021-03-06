import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class ProblemListService extends BaseHttpService{
    
    constructor(private httpClient:HttpClient){
        super(httpClient);
    }
    getProblemList():Observable<any>{
        return this.httpClient.get<any>(this.rootUrl+`issue`,this.httpOptions)
    }
}