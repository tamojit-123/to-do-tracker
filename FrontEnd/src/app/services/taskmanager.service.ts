import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private http: HttpClient) { }

  urlPrefix:string = `http://localhost:9000/task-manager/api/v1/user/`;


  getLatestTaskID(userID: number): Observable<any> {
    return this.http.get(this.urlPrefix + `${userID}/latest-task-id`)
  }

  addNewTask(userID: number, task: Task) : Observable<any>
  {
    return this.http.post(this.urlPrefix + `${userID}/task`, {
      "taskID":task.taskID,
      "taskHeading":task.taskHeading,
      "taskContent":task.taskContent,
      "dueDate":task.dueDate,
      "priorityLevel":task.priorityLevel,
      "category":task.category,
      "imageUrl":task.imageUrl,
      "completed":task.completed
    })
  }

  updateTask(userID: number, taskID:number, task:Task): Observable<any> {
    return this.http.put(this.urlPrefix + `${userID}/task/${taskID}`, {
      "taskHeading":task.taskHeading,
      "taskContent":task.taskContent,
      "dueDate":task.dueDate,
      "priorityLevel":task.priorityLevel,
      "category":task.category,
      "imageUrl":task.imageUrl,
      "completed":task.completed
    })
  }

  deleteTask(userID: number, taskID:number): Observable<any> {
    return this.http.delete(this.urlPrefix + `${userID}/task/${taskID}`)
  }

  markAsComplete(userID: number, taskID:number): Observable<any> {
    return this.http.put(this.urlPrefix + `${userID}/task/${taskID}/mark-complete`, '')
  }

  moveToArchive(userID: number, taskID:number): Observable<any> {
    return this.http.put(this.urlPrefix + `${userID}/task/${taskID}/archive`, '')
  }

  updateHeading(userID: number, taskID:number, heading:string): Observable<any> {
    return this.http.put(this.urlPrefix + `${userID}/task/${taskID}/heading`, heading)
  }

  updateContent(userID: number, taskID:number, content:string): Observable<any> {
    return this.http.put(this.urlPrefix + `${userID}/task/${taskID}/content`, content)
  }

}
