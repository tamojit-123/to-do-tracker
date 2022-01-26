import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { Task } from '../models/Task';
import { TaskManagerService } from '../services/taskmanager.service';
import { ImageService } from "../services/image.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';
  //
  // fileInfos?: Observable<any>;

  constructor(public modalRef: BsModalRef,
              private managerService:TaskManagerService,
              private router : Router,
              // private imageService: ImageService
  ) { }

  //Validation
  taskForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    desciption : new FormControl('',[Validators.required]),
    category : new FormControl ('',[Validators.required]),
    imageUrl : new FormControl ('',[Validators.required]),
    dueDate : new FormControl ('',[Validators.required]),
    priorityLevel : new FormControl ('',[Validators.required])

  })

  id?:number;
  get title() { return this.taskForm.get('title'); }
  get desciption() { return this.taskForm.get('desciption'); }
  get category() { return this.taskForm.get('category'); }
  get imageUrl() { return this.taskForm.get('imageUrl'); }
  get dueDate() { return this.taskForm.get('dueDate'); }
  get priorityLevel() { return this.taskForm.get('priorityLevel'); }

  //get loggedIn UserID and Task Id
  currentUserID!: number;
  latestTaskID!: number

  ngOnInit(): void
  {
    //get loggedIn UserID
      let userID:string|null = localStorage.getItem('currentUserID')
      this.currentUserID = parseInt(userID == null ? '' : userID)
      // this.fileInfos = this.imageService.getFiles();

    //Get Latest Task Id
    this.managerService.getLatestTaskID(this.currentUserID).subscribe(response => {
      this.latestTaskID = response
      console.log(this.latestTaskID)
      this.id = this.latestTaskID + 1
    })
  }

  // Form Submit
  addTask()
  {
    if(this.taskForm.value.title == '' && this.taskForm.value.desciption == '' && this.taskForm.value.category == '' && this.taskForm.value.imageUrl == '' && this.taskForm.value.dueDate == '')
    {
      alert("Enter Mandatory Fields!")
    }
    else{
      let newTask:Task =  new Task (
          this.id!,
          this.taskForm.value.title,
          this.taskForm.value.desciption,
          this.taskForm.value.dueDate,
          this.taskForm.value.priorityLevel,
          this.taskForm.value.category,
          this.taskForm.value.imageUrl)
          console.log(newTask)

      this.managerService.addNewTask(this.currentUserID, newTask)
      .subscribe(response => {
        console.log(response)
        this.closeModel()
        this.router.navigateByUrl('/cards')
      })
    }

  }

// Close Model
  closeModel(){
    this.modalRef.hide()
  }

  // //image uploading
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

}
