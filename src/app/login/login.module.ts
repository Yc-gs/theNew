import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module'
import {LoginRoutingModule} from "./login-routing.module";
import { RegisterComponent } from './register/register.component';
import {ProjectRoutingModule} from "../project/project-routing.module";
@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    ProjectRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
