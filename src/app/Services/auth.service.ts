import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import { Login } from "./login";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private customersUrl = 'api/customer'; 
  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: Http) {}

private handleError(error: any): Promise<any> {
  console.error('Error', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  finUser(login: Login): Observable<number> {
    return this.http.post(this.customersUrl,login)
      .map((res:Response) => res.json() as number)
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }
}