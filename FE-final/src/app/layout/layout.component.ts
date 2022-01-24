import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  modalRef! :  BsModalRef;
  isLoggedIn:boolean = true

  overDueMessage!:string
  nearDueMessage!:string

  constructor(private modalService: BsModalService, private router: Router) {}

  ngOnInit(): void {
    let logged:string|null = localStorage.getItem('loggedIn')
    if (logged == null || logged !== 'true') {
      this.isLoggedIn = false
    } else {
      this.isLoggedIn = true
    }

  }

  openModal() {
    this.modalRef = this.modalService.show(TaskFormComponent);
  }


  logout() {
    localStorage.setItem('loggedIn', 'false')
    localStorage.removeItem('currentUserID')
    this.ngOnInit()
    this.router.navigateByUrl('/')
  }
}
