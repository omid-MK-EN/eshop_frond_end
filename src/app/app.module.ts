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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EshopInterceptor } from './utilitis/eshop.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { BrandComponent } from './shared_components/brand/brand.component';
import { CategoryComponent } from './shared_components/category/category.component';
import { PaginationComponent } from './shared_components/pagination/pagination.component';
import { SingleProductComponent } from './shared_components/single-product/single-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SingleReommandProductComponent } from './shared_components/single-reommand-product/single-reommand-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


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
    WholeSalesComponent,
    AllProductsComponent,
    BrandComponent,
    CategoryComponent,
    PaginationComponent,
    SingleProductComponent,
    ProductDetailComponent,
    SingleReommandProductComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:EshopInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
