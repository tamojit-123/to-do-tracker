import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskReminderService {

  urlPrefix = 'http://localhost:9000/task-reminder/api/v1/user/'

  constructor(private http:HttpClient) { }

  getAllTasks(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/all`)
  }

  getPending(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/pending`)
  }

  getCompleted(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/completed`)
  }

  getHighPriorityTasks(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/high-priority`)
  }

  getNearDueTasks(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/neardue`)
  }

  getOverDueTasks(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/overdue`)
  }

  getTasksByCategory(userID:number, category:string): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/category/${category}`)
  }

  getTasksSortedByDueDate(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/sorted-duedate`)
  }

  getTasksSortedByPriority(userID:number): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlPrefix + `${userID}/tasks/sorted-priority`)
  }
}
