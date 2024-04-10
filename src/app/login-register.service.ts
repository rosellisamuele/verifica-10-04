import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private HttpClient : HttpClient) { }

  login(data : any) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.HttpClient.post("http://localhost:8080/login",data,httpOptions);
  }

  register(data : any) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.HttpClient.post("http://localhost:8080/register",data,httpOptions);
  }
}
