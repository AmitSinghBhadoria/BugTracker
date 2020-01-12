import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterationComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
