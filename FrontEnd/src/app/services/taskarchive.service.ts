import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskArchiveService {

  urlPrefix: string = 'http://localhost:9000/task-archive/api/v1/'

  constructor(private http: HttpClient) { }

  getAllArchivedTasks(userID: number): Observable<any> {
    return this.http.get(this.urlPrefix + `user/${userID}/tasks/archived`)
  }

  deleteFromArchive(userID: number, taskID: number): Observable<any> {
    return this.http.delete(this.urlPrefix + `user/${userID}/tasks/${taskID}`)
  }
}
