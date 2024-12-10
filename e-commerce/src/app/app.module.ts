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
import { ButtonModule } from 'primeng/button'; // Import module Button nếu sử dụng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductDetailModule } from './features/product-detail/product-detail.module';
import { JwtModule } from '@auth0/angular-jwt';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './shared/component/breadcrumb/breadcrumb.component';
import { ScrollToTopComponent } from './shared/component/scroll-to-top/scroll-to-top.component';

export function tokenGetter(): string | null {
  return localStorage.getItem('token'); // Replace with your token storage key
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, BreadcrumbComponent, ScrollToTopComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    AuthModule,
    ProfileModule,
    HomeModule,
    ProductDetailModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['localhost:8080/api/auth'],
      },
    }),
  ],
  providers: [
    UserService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // Allow multiple interceptors
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
