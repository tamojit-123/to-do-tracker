import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { Task } from '../models/Task';
import { TaskManagerService } from '../services/taskmanager.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  constructor(public modalRef: BsModalRef,private managerService:TaskManagerService, private router : Router) { }

  //Validation
  taskForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    desciption : new FormControl('',[Validators.required]),
    category : new FormControl ('',[Validators.required]),
    dueDate : new FormControl ('',[Validators.required]),
    priorityLevel : new FormControl ('',[Validators.required])

  })

  id?:number;
  get title() { return this.taskForm.get('title'); }
  get desciption() { return this.taskForm.get('desciption'); }
  get category() { return this.taskForm.get('category'); }
  get dueDate() { return this.taskForm.get('dueDate'); }
  get priorityLevel() { return this.taskForm.get('priorityLevel'); }

  //get loggenIn UserID and Task Id
  currentUserID!: number;
  latestTaskID!: number 
 
  ngOnInit(): void 
  {
    //get loggenIn UserID
      let userID:string|null = localStorage.getItem('currentUserID')
      this.currentUserID = parseInt(userID == null ? '' : userID)

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
    if(this.taskForm.value.title == '' && this.taskForm.value.desciption == '' && this.taskForm.value.category == '' && this.taskForm.value.dueDate == '')
    {
      alert("Enter Mandatory Fields!")  
    }
    else{
      let newTask:Task =  new Task (this.id!, this.taskForm.value.title,this.taskForm.value.desciption, 
        this.taskForm.value.dueDate, this.taskForm.value.priorityLevel, 
        this.taskForm.value.category)
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

}
