import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LayoutComponent } from '../layout/layout.component';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1!: FormGroup;

  constructor(
      private authService: AuthenticationService,
      private router:Router,
      private layoutComp: LayoutComponent,
      private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form1 = this.formBuilder.group({

      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }



  JwtHelper: JwtHelperService = new JwtHelperService();

  email!:string
  password!:string
  userName!:string
  doLogin(){
    this.authService.loginUser(this.email, this.password)
                      .subscribe((res) => {
                        this.authService.getemail(this.email);
                      localStorage.setItem('email',this.email);
                      // this.authService.getusername(this.userName);
                      // localStorage.setItem('userName',this.userName);

                        localStorage.setItem('currentUserID', this.JwtHelper.decodeToken(res.token).sub)
                        localStorage.setItem('loggedIn', 'true')
                        console.log(`Current User ID: ${localStorage.getItem('currentUserID')} || is logged in: ${localStorage.getItem('loggedIn')}`)
                        this.layoutComp.ngOnInit()
                        Swal.fire({
                          icon: 'success',
                          color:'green',
                          title: 'You logged in successfuly',
                          showConfirmButton: false,
                          timer: 3000 ,
                          showCancelButton:true,
                            position:'center'

                         })

                        this.router.navigateByUrl('/cards')
                      }, (err: Error) => {
                        console.log(err.message)
                      })

  }

}
