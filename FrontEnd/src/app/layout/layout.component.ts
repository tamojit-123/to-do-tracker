import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from '../task-form/task-form.component';
import { AuthenticationService } from "../services/authentication.service";
import  Swal  from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  modalRef!: BsModalRef;
  isLoggedIn: boolean = true

  overDueMessage!: string
  nearDueMessage!: string

  // currentUser = localStorage.getItem('email')
  email: any = "";
  constructor(private modalService: BsModalService,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.email = localStorage.getItem('email');

  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    let logged: string | null = localStorage.getItem('loggedIn')
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
    localStorage.removeItem('email')
    this.ngOnInit()
    Swal.fire({
      icon: 'success',
      color:'green',
      title: 'Thank you visit again',
      showConfirmButton: false,
      timer: 3000 ,
      // showCancelButton:true,


     })
    this.router.navigateByUrl('/login')
  }

  getemail(): void {
    this.email = this.authenticationService.loginemail
    localStorage.setItem('email', 'email')
  }
}
