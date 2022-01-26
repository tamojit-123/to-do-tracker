import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskManagerService } from '../services/taskmanager.service';
import { TasksComponent } from '../tasks/tasks.component';
import { ImageService } from "../services/image.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';
  //
  // fileInfos?: Observable<any>;

  modalRef! :  BsModalRef;
  @Input()
  task!: Task;
  taskForm!:FormGroup
  currentUserID!:number


  constructor(private modal: NgbModal,
              private formBuilder: FormBuilder,
              private managerService: TaskManagerService,
              private tasksComp: TasksComponent,
              // private imageService: ImageService
  ) { }

  ngOnInit(): void {

    // this.fileInfos = this.imageService.getFiles();

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

    // this.file = "todoicon1.png";
    //
    // this.fileInfos = this.imageService.getFiles();
    //
    // this.fileInfos.subscribe(data => {
    //   console.log(data);
    //   // console.log(data[1].name);
    //   // if (this.file == data[1].name) {
    //   //   this.fileData = data[1];
    //   //   console.log(this.fileData);
    //   //   console.log(this.fileData.url);
    //   // }
    // })
  }

  // file!: string;
  // fileData: any;
  //
  // selectedFiles?: FileList;
  // currentFile?: File;
  //
  // progress = 0;
  // message = '';
  //
  // fileInfos?: Observable<any>;
  //
  // selectFile(event: any) {
  //   this.selectedFiles = event.target.files;
  // }

  // selectFile(event: any) {
  //   this.selectedFiles = event.target.files;
  // }
  //
  // upload(): void {
  //   this.progress = 0;
  //
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //
  //     if (file) {
  //       this.currentFile = file;
  //
  //       this.imageService.upload(this.currentFile).subscribe(
  //           (event: any) => {
  //             if (event.type === HttpEventType.UploadProgress) {
  //               this.progress = Math.round(100 * event.loaded / event.total);
  //             } else if (event instanceof HttpResponse) {
  //               this.message = event.body.message;
  //               this.fileInfos = this.imageService.getFiles();
  //             }
  //           },
  //           (err: any) => {
  //             console.log(err);
  //             this.progress = 0;
  //
  //             if (err.error && err.error.message) {
  //               this.message = err.error.message;
  //             } else {
  //               this.message = 'Could not upload the file!';
  //             }
  //
  //             this.currentFile = undefined;
  //           });
  //     }
  //
  //     this.selectedFiles = undefined;
  //   }
  // }

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

  // priorityImageClass():string {
  //   if (this.task.priorityLevel === 'HIGH') {
  //     return 'high-img'
  //   }
  //   if (this.task.priorityLevel === 'MEDIUM') {
  //     return 'med-img'
  //   }
  //   return 'low-img'
  // }

}
