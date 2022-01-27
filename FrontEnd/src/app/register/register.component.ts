import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.authService.getLatestUserID().subscribe(response => {
      console.log(response)
      this.userID = response + 1
    })
  }

  userID!:number
  userName!:string
  email!:string
  password!:string



  doRegister() {
    this.authService.registerUser(this.userID, this.userName, this.email, this.password)
                    .subscribe(response => {
                      console.log(response)
                      this.router.navigateByUrl('/login')
                    })
  }
}
