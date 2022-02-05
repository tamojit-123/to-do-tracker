import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { TaskReminderService } from '../services/taskreminder.service';
import { ToastrService } from 'ngx-toastr';
import { TaskArchiveService } from '../services/taskarchive.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  currentUserID!: number

  tasksToDisplay!: Task[]

  overDueCount:number = 0
  nearDueCount:number = 0

  nearDueMessage: string = 'You have no tasks pending in Near Due!'
  overDueMessage: string = 'You have no tasks pending in Over Due!'

  constructor(
      private reminderService: TaskReminderService,
      private archiveService: TaskArchiveService,
      private toastr: ToastrService) { }

  ngOnInit(): void {

    let userID:string|null = localStorage.getItem('currentUserID')
    this.currentUserID = parseInt(userID == null ? '' : userID)

    this.getOverDue()
    this.getNearDue()

      this.nearDueMessage = `You have got ${this.nearDueCount} messages in Near Due!`
      setTimeout(() => this.showNearDueToast(this.nearDueCount), 2000)

      this.overDueMessage = `You have got ${this.overDueCount} messages in Over Due!`
      setTimeout(() => this.showOverDueToast(this.overDueCount), 3000)

      this.getAllTasks()
  }

  getAllTasks() {
    this.reminderService.getAllTasks(this.currentUserID).subscribe((res) => this.tasksToDisplay = res)
  }

  getPending() {
    this.reminderService.getPending(this.currentUserID).subscribe((res) => this.tasksToDisplay = res)
  }

  getCompleted() {
    this.reminderService.getCompleted(this.currentUserID).subscribe((res) => {this.tasksToDisplay = res
    console.log(this.tasksToDisplay)})
  }

  getHighPriority() {
    this.reminderService.getHighPriorityTasks(this.currentUserID).subscribe((res) => this.tasksToDisplay = res)
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
    this.archiveService.getAllArchivedTasks(this.currentUserID).subscribe((res) => this.tasksToDisplay = res)
  }


  showOverDueToast(count: number) {
    this.toastr.show('Over Due', `You've ${count} tasks in over-due!`, {
      timeOut: 22000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      toastClass: "border-red",
    })
  }

  showNearDueToast(count: number) {
    this.toastr.show('Near Due', `You've ${count} tasks in near-due!`, {
      timeOut: 18000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      toastClass: "border-blue",
    })
  }
}
