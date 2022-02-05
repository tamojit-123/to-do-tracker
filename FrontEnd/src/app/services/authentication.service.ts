import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  urlPrefix:string = 'http://localhost:9000';

  loginemail:string='';

  getemail(email:string){
    this.loginemail=email;
  }

  loginuserName:string='';

  getusername(userName:string){
    this.loginuserName=userName;
  }

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

  isLoggedIn:boolean = false

  logout() {
    this.isLoggedIn = false;
  }
}
