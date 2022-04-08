import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getActiveAllProduct():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>('/products');
  }
  




}
