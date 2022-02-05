import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword!: FormGroup;

  constructor(
      private authService: AuthenticationService,
      private router:Router,
      private layoutComp: LayoutComponent,
      private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPassword = this.formBuilder.group({

      email: [null, [Validators.required, Validators.email]],
      // password: [null, Validators.required],
      remember: [null, Validators.required],
    });
  }

  // JwtHelper: JwtHelperService = new JwtHelperService();

  email!:string
  // password!:string

  // doLogin(){
  //   this.authService.loginUser(this.email, this.password)
  //       .subscribe((res) => {
  //         this.authService.getemail(this.email);
  //         localStorage.setItem('email',this.email);
  //         localStorage.setItem('currentUserID', this.JwtHelper.decodeToken(res.token).sub)
  //         localStorage.setItem('loggedIn', 'true')
  //         console.log(`Current User ID: ${localStorage.getItem('currentUserID')} || is logged in: ${localStorage.getItem('loggedIn')}`)
  //         this.layoutComp.ngOnInit()
  //         this.router.navigateByUrl('/cards')
  //       }, (err: Error) => {
  //         console.log(err.message)
  //       })
  //
  // }

}
