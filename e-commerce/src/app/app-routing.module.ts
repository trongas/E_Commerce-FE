import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Điều hướng mặc định
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product-details/:id',
    loadChildren: () =>
      import('./features/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./board-admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'mod',
    loadChildren: () =>
      import('./board-moderator/moderator.module').then(
        (m) => m.ModeratorModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./board-user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'home', // Điều hướng khi route không tồn tại
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
