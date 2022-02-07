  import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { TasksComponent } from './tasks/tasks.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    TasksComponent,
    LayoutComponent,
    LoginComponent,
    AuthenticationComponent,
    RegisterComponent,
    TaskCardComponent,
    TaskFormComponent,
    CustomToastComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    ForgotPasswordComponent,
    UserDetailsComponent,
    FeaturesComponent
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
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent, // added custom toast!
    }),
    ],
  providers: [AuthenticationService, TaskManagerService, TaskReminderService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
