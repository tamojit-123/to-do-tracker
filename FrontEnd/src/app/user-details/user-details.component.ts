import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {TaskReminderService} from "../services/taskreminder.service";
import {TaskArchiveService} from "../services/taskarchive.service";
import {Task} from "../models/Task";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  email:any="";
  userName:any="";

  currentUserID!: number

  tasksToDisplay!: Task[]

  overDueCount:number = 0
  nearDueCount:number = 0
  allTask:number = 0
  pendingTask:number = 0
  completeTask:number = 0
  archiveTask:number = 0
  highTask:number = 0
  // isLoggedIn: boolean = true

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private reminderService: TaskReminderService,
              private archiveService: TaskArchiveService) {
    this.email=localStorage.getItem('email');
    this.userName=localStorage.getItem('userName');
  }

  ngOnInit(): void {
    let userID:string|null = localStorage.getItem('currentUserID')
    this.currentUserID = parseInt(userID == null ? '' : userID)
    // this.userName=localStorage.getItem('userName');
    //
    // let logged: string | null = localStorage.getItem('loggedIn')
    // if (logged == null || logged !== 'true') {
    //   this.isLoggedIn = false
    // } else {
    //   this.isLoggedIn = true
    // }

    this.getOverDue()
    this.getNearDue()
    this.getAllTasks()
    this.getPending()
    this.getCompleted()
    this.getArchived()
    this.getHighPriority()
     // this.getusername()
  }

  getAllTasks() {
    this.reminderService.getAllTasks(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.allTask = res.length})
  }

  getPending() {
    this.reminderService.getPending(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.pendingTask = res.length})
  }

  getCompleted() {
    this.reminderService.getCompleted(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.completeTask = res.length})
  }

  getHighPriority() {
    this.reminderService.getHighPriorityTasks(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.highTask = res.length})
  }

  getNearDue() {
    this.reminderService.getNearDueTasks(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.nearDueCount = res.length})
  }

  getOverDue() {
    this.reminderService.getOverDueTasks(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.overDueCount = res.length})
  }

  getArchived() {
    this.archiveService.getAllArchivedTasks(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
      this.archiveTask = res.length})
  }

  getusername():void{
    this.userName = this.authenticationService.loginuserName
     localStorage.setItem('userName', 'userName')

  }
}
