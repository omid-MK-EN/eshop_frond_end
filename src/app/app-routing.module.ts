import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopAboutUsComponent } from './pages/eshop-about-us/eshop-about-us.component';
import { EshopContactUsComponent } from './pages/eshop-contact-us/eshop-contact-us.component';
import { EshopIndexComponent } from './pages/eshop-index/eshop-index.component';
import { EshopLoginComponent } from './pages/eshop-login/eshop-login.component';
import { EshopNotfoundComponent } from './pages/eshop-notfound/eshop-notfound.component';
import { EshopRegisterComponent } from './pages/eshop-register/eshop-register.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home", component:EshopIndexComponent},
  {path:"contact-us", component:EshopContactUsComponent},
  {path:"about-us", component:EshopAboutUsComponent},
  {path:"login", component:EshopLoginComponent},
  {path:"register", component:EshopRegisterComponent},
  {path:"notfound", component:EshopNotfoundComponent},
  {path:"**", redirectTo:"notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
