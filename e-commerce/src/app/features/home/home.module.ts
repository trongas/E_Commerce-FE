import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselComponent } from './carousel/carousel.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { RatingModule } from 'primeng/rating';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { MusicExperienceComponent } from './music-experience/music-experience.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { FeaturedArrivalComponent } from './featured-arrival/featured-arrival.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, FlashSalesComponent, CategoryGridComponent, BestSellerComponent, MusicExperienceComponent, OurProductsComponent, FeaturedArrivalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
    CarouselModule,
    SidebarModule,
    RatingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule {}
