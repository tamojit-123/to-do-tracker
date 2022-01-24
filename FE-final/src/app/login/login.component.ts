import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LayoutComponent } from '../layout/layout.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router, private layoutComp: LayoutComponent) { }

  ngOnInit(): void {
  }

  JwtHelper: JwtHelperService = new JwtHelperService();

  email!:string
  password!:string

  doLogin(){
    this.authService.loginUser(this.email, this.password)
                      .subscribe((res) => {
                        localStorage.setItem('currentUserID', this.JwtHelper.decodeToken(res.token).sub)
                        localStorage.setItem('loggedIn', 'true')
                        console.log(`Current User ID: ${localStorage.getItem('currentUserID')} || is logged in: ${localStorage.getItem('loggedIn')}`)
                        this.layoutComp.ngOnInit()
                        this.router.navigateByUrl('/cards')
                      }, (err: Error) => {
                        console.log(err.message)
                      })
                      /* localStorage.setItem('loggedIn', 'true')
                      this.layoutComp.ngOnInit()
                      this.router.navigateByUrl('/cards') */
  }

}
