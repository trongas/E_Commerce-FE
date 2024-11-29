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
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent, // Keep only AppComponent here
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    AuthModule,
    ProfileModule,
    HomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
    }),
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
