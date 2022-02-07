import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { TaskFormComponent } from './task-form/task-form.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {FeaturesComponent} from "./features/features.component";

const routes: Routes = [
  {
    path:"",
    component:AuthenticationComponent,
    children:[
      {
        path:"",
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'forgot-password',
        component:ForgotPasswordComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
      },
      {
        path:'profile',
        component:UserDetailsComponent
      },
      {
        path:'feature',
        component:FeaturesComponent
      },
    ]
  },
  {
    path:'cards',
    component:TasksComponent
  },
  {
    path:"new-task",
    component:TaskFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
