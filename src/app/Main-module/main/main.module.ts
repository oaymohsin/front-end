import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HeaderComponent } from './main-components/header/header.component';
import { HomeComponent } from './main-components/home/home.component';
import { OrderFailedComponent } from './main-components/order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './main-components/order-successful/order-successful.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { WildCardComponent } from './main-components/wild-card/wild-card.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    CheckOutComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OrderFailedComponent,
    OrderSuccessfulComponent,
    ProductsComponent,
    ViewProductsComponent,
    WildCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
