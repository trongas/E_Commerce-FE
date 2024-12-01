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

@NgModule({
  declarations: [HomeComponent, CarouselComponent, FlashSalesComponent],
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
