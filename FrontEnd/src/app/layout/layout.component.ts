import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from '../task-form/task-form.component';
import {AuthenticationService} from "../services/authentication.service";

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

  currentUser = localStorage.getItem('email')

  constructor(private modalService: BsModalService,
              private router: Router,
              private authenticationService: AuthenticationService) {}

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
    this.router.navigateByUrl('/login')
  }
}
