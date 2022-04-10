import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrand } from './../interfaces/brand.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getActiveBrands():Observable<IBrand[]>
  {
    return this.http.get<IBrand[]>('/product_brands');
  }
  
  // getActiveProductByBrandFilter(brand_id:number)
  // {
  //   this.http.get<IBrand[]>('/product_brands');
  // }
  
}
