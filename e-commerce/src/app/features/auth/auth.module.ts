import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule,InputTextModule , PasswordModule, FormsModule,ButtonModule, AuthRoutingModule,MessagesModule,  FormsModule, HttpClientModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AuthModule {}
