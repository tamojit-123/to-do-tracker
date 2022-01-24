import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { TasksComponent } from './tasks/tasks.component'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TaskFormComponent } from './task-form/task-form.component';
import { AuthenticationService } from './services/authentication.service';
import { TaskManagerService } from './services/taskmanager.service'; 
import { TaskReminderService } from './services/taskreminder.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LayoutComponent,
    LoginComponent,
    AuthenticationComponent,
    RegisterComponent,
    TaskCardComponent,
    TaskFormComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbModule,
    ToastrModule.forRoot()
    ],
  providers: [AuthenticationService, TaskManagerService, TaskReminderService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
