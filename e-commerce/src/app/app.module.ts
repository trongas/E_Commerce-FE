import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { HomeModule } from './features/home/home.module';
import { ProfileModule } from './features/profile/profile.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/user.service';
import { StorageService } from './_services/storage.service';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { MenubarModule } from 'primeng/menubar'; // Import module Menubar
import { ButtonModule } from 'primeng/button';   // Import module Button nếu sử dụng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, // Keep only AppComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    AuthModule,
    HomeModule,
    ProfileModule,
    MenubarModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Use the interceptor
      multi: true, // Allow multiple interceptors
    },
  ],  bootstrap: [AppComponent],
})
export class AppModule {}
