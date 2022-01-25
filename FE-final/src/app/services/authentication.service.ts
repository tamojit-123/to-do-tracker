import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  urlPrefix:string = 'http://localhost:9000';

  getLatestUserID(): Observable<any> {
    return this.httpClient.get(this.urlPrefix + '/authentication/api/v1/latest-id')
  }

  registerUser(userID:number, userName:string, email:string, password:string): Observable<any> {
    return this.httpClient.post(this.urlPrefix + '/task-manager/api/v1/register', {
      'userID':userID,
      'userName':userName,
      'email':email,
      'password':password
    })
  }

  loginUser(email:string, password:string): Observable<any> {
      return this.httpClient.post(this.urlPrefix + '/task-manager/api/v1/login', {
        'email':email,
        'password': password
      })
  }

  // loginUser(user: any) {
  //   return this.httpClient.post<any>(this.urlPrefix + '/task-manager/api/v1/login', user)
  //       .pipe(map(userData => {
  //             sessionStorage.setItem("email", user.email);
  //             let tokenStr = "Bearer " + userData.token;
  //             sessionStorage.setItem("token", tokenStr);
  //             console.log(sessionStorage.getItem(tokenStr));
  //
  //             return userData;
  //           })
  //       );
  // }

  isLoggedIn:boolean = false

  logout() {
    this.isLoggedIn = false;
  }
}
