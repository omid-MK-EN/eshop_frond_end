import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EshopHeaderComponent } from './shared_components/eshop-header/eshop-header.component';
import { EshopFooterComponent } from './shared_components/eshop-footer/eshop-footer.component';
import { EshopIndexComponent } from './pages/eshop-index/eshop-index.component';
import { EshopNotfoundComponent } from './pages/eshop-notfound/eshop-notfound.component';
import { EshopContactUsComponent } from './pages/eshop-contact-us/eshop-contact-us.component';
import { EshopAboutUsComponent } from './pages/eshop-about-us/eshop-about-us.component';
import { EshopLoginComponent } from './pages/eshop-login/eshop-login.component';
import { EshopRegisterComponent } from './pages/eshop-register/eshop-register.component';
import { SliderComponent } from './pages/eshop-index/slider/slider.component';
import { BestsellersProductsComponent } from './pages/eshop-index/bestsellers-products/bestsellers-products.component';
import { CategoriesProductsComponent } from './pages/eshop-index/categories-products/categories-products.component';
import { RetailSalesComponent } from './pages/eshop-index/retail-sales/retail-sales.component';
import { WholeSalesComponent } from './pages/eshop-index/whole-sales/whole-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    EshopHeaderComponent,
    EshopFooterComponent,
    EshopIndexComponent,
    EshopNotfoundComponent,
    EshopContactUsComponent,
    EshopAboutUsComponent,
    EshopLoginComponent,
    EshopRegisterComponent,
    SliderComponent,
    BestsellersProductsComponent,
    CategoriesProductsComponent,
    RetailSalesComponent,
    WholeSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
