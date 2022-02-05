import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import  Swal  from 'sweetalert2/dist/sweetalert2.js';
// import {ConfirmedValidator} from './register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthenticationService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm_password: [null, Validators.required],
      policy: [null, Validators.required],
      // confirm_password: [null, [Validators.required]]
    },
    {
      validator: ConfirmedValidator('password', 'confirm_password')

    });

    this.authService.getLatestUserID().subscribe(response => {
      console.log(response)
      this.userID = response + 1
    })
  }
  get f(){
    return this.form.controls;
  }
  userID!:number
  userName:string='';
  email!:string
  password!:string



  doRegister() {
    this.authService.registerUser(this.userID, this.userName, this.email, this.password)
                    .subscribe(response => {
                      this.authService.getusername(this.userName);
                      localStorage.setItem('userName',this.userName);
                      console.log(response)
                      Swal.fire({
                        icon: 'success',
                        color:'green',
                        title: 'You registered successfuly',
                        showConfirmButton: false,
                        timer: 3000 ,
                        showCancelButton:true,
                          position:'center'

                       })
                      this.router.navigateByUrl('/login')

                    })
  }
}

 export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
