import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    rootUrl = "https://pkumn03tok.execute-api.us-east-2.amazonaws.com/";
    headers: HttpHeaders = new HttpHeaders({
        'content-Type': 'application/json'
    });
    httpOptions = {headers:this.headers};

    constructor(httpClient:HttpClient){
    }
}