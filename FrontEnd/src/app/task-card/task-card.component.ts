import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskManagerService } from '../services/taskmanager.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {


  modalRef! :  BsModalRef;
  @Input()
  task!: Task;
  taskForm!:FormGroup
  currentUserID!:number


  constructor(private modal: NgbModal,
              private formBuilder: FormBuilder,
              private managerService: TaskManagerService,
              private tasksComp: TasksComponent) { }

  ngOnInit(): void {

    this.taskForm = this.formBuilder.group({
      title:['',Validators.required],
      desciption : ['',Validators.required],
      category : ['',Validators.required],
      imageUrl : ['',Validators.required],
      dueDate : ['',Validators.required],
      priorityLevel : ['',Validators.required]
    })

    let userID:string|null = localStorage.getItem('currentUserID')
    this.currentUserID = parseInt(userID == null ? '' : userID)
  }

  openFormModal(modalName:any) {
    this.modal.open(modalName)
    this.taskForm.patchValue({
      title: this.task.taskHeading,
      desciption: this.task.taskContent,
      category:this.task.category,
      imageUrl:this.task.imageUrl,
      dueDate: this.task.dueDate,
      priorityLevel  :this.task.priorityLevel
    })
  }

  openConfirmModal(modalName: any) {
    this.modal.open(modalName)
  }

  updateTask() {
    this.modal.dismissAll()
    let updatedTask: Task = new Task(
        this.task.taskID,
        this.taskForm.value.title,
        this.taskForm.value.desciption,
        this.taskForm.value.dueDate,
        this.taskForm.value.priorityLevel,
        this.taskForm.value.category,
        this.taskForm.value.imageUrl)
    this.managerService.updateTask(
        this.currentUserID, this.task.taskID, updatedTask).subscribe(res => console.log(res))
    this.tasksComp.ngOnInit()

  }

  markComplete() {
    this.modal.dismissAll()
    this.managerService.markAsComplete(this.currentUserID, this.task.taskID).subscribe(res => console.log(res))
    this.tasksComp.getCompleted()

  }

  deleteTask() {
    this.modal.dismissAll()
    this.managerService.deleteTask(this.currentUserID, this.task.taskID).subscribe(res => console.log(res))
    this.tasksComp.ngOnInit()

  }

  doArchive() {
    this.modal.dismissAll()
    this.managerService.moveToArchive(this.currentUserID, this.task.taskID).subscribe(res => console.log(res))
    this.tasksComp.ngOnInit()
  }

  priorityClass():string {
    if (this.task.priorityLevel === 'HIGH') {
      return 'high'
    }
    if (this.task.priorityLevel === 'MEDIUM') {
      return 'med'
    }
      return 'low'
  }

}
