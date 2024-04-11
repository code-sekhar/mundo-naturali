import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './section/banner/banner.component';
import { ShopComponent } from './section/shop/shop.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,CarouselModule,NgxSliderModule,
  ]
})
export class HomeModule { }
