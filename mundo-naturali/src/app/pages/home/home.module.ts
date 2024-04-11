import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './section/banner/banner.component';
import { ShopComponent } from './section/shop/shop.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
