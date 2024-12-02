import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { WishlistComponent } from './wishlist.component';
import { WishlistRoutingModule } from './wishlist-routing.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    WishlistRoutingModule,
    RatingModule,
    CarouselModule
  ],
})
export class ProductDetailModule {}
