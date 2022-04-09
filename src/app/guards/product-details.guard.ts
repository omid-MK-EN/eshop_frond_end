import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { IProperty } from './../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements Resolve<IProperty> {
  product!:IProperty;
  constructor(private productService:ProductService,private router:Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProperty | Observable<IProperty> | Promise<IProperty> {
    let strid= route.paramMap.get("id")
    const id= Number(strid)
    this.productService.getActiveProduct(id).subscribe(product=>{
      this.product=product
   
    },err=>{
     
      this.router.navigate(['/notfound'])
    })
    console.log("men guard hastem")
    
    // setTimeout(()=>{},1000)
    console.log(this.product)
    return this.product
  
  }
  
  
  
}
