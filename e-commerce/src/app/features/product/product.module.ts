import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { PasswordModule } from "primeng/password";
import { CardModule } from "primeng/card";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from "primeng/rating";

@NgModule({
    declarations: [ProductComponent],
    imports: [
      CommonModule,
      FormsModule,
      ProductRoutingModule,
      InputTextModule,
      ButtonModule,
      RippleModule,
      PasswordModule,
      CardModule,
      BreadcrumbModule,
      TableModule,
      CarouselModule,
      RatingModule,
      
    ],
  })
export class ProductModule {}