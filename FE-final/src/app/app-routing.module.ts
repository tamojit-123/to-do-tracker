import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {
    path:"",
    component:AuthenticationComponent,
    children:[
      {
        path:"",
        redirectTo:'login',
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
