import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full', // Default route
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
      data: { breadcrumb: 'Contact' },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
      data: { breadcrumb: 'About' },
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
      data: { breadcrumb: 'Product' },
  },
  {
    path: 'product-details/:id',
    loadChildren: () =>
      import('./features/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
      data: { breadcrumb: 'Product Details' },
  },
  {
    path: 'wishlist/:id',
    loadChildren: () =>
      import('./features/wishlist/wishlist-routing.module').then(
        (m) => m.WishlistRoutingModule
      ),
      data: { breadcrumb: 'Wishlist' },
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
      data: { breadcrumb: 'Profile' },
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
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
