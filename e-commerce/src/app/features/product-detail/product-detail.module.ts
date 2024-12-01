import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailRoutingModule,
    RatingModule,
    CarouselModule
  ],
})
export class ProductDetailModule {}
