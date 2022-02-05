import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }

  onSubmit(todoTracker: NgForm) {
    if (todoTracker.valid) {
      const email = todoTracker.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xayvedyn',
          { name: email.name, replyto: email.email, message: email.messages },
          { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              color:'green',
              title: 'Message delivered successfully',
              showConfirmButton: false,
              timer: 3000 ,
              showCancelButton:false,
              position:'center'

            })
          }
      );
    }
  }
}